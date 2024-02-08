document.addEventListener('DOMContentLoaded', function() {
  fetch('https://raw.githubusercontent.com/davidjrb/davidjrb.github.io/master/blogs/posts.json')
    .then(response => response.json())
    .then(posts => {
      const fetchPromises = posts.map((postUrl, index) => 
        fetch(postUrl)
          .then(response => response.text())
          .then(markdown => ({
            order: index, // Keep track of the original order
            content: markdown
          }))
      );

      // Wait for all fetches to complete
      Promise.all(fetchPromises).then(results => {
        // Ensure results are sorted by the original order, if necessary
        results.sort((a, b) => a.order - b.order); // This step might be optional if the order is already correct

        // Append each post's content in order
        results.forEach(result => {
          const content = document.createElement('div');
          content.innerHTML = marked.parse(result.content);
          document.getElementById('markdownContent').appendChild(content);
        });
      })
      .catch(error => console.error('Error processing posts:', error));
    })
    .catch(error => console.error('Error loading posts list:', error));
});
