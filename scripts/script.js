document.addEventListener('DOMContentLoaded', function() {
  fetch('/blogs/posts.json')
    .then(response => response.json())
    .then(posts => {
      posts.forEach(postUrl => {
        fetch(postUrl)
          .then(response => response.text())
          .then(markdown => {
            const content = document.createElement('div');
            content.innerHTML = marked.parse(markdown);
            document.getElementById('markdownContent').appendChild(content);
          })
          .catch(error => console.error('Error loading post:', error));
      });
    })
    .catch(error => console.error('Error loading posts list:', error));
});
