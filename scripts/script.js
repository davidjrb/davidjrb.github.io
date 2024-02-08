document.addEventListener('DOMContentLoaded', function() {
  fetch('https://raw.githubusercontent.com/davidjrb/md2html/master/README.md')
    .then(response => response.text())
    .then(markdown => {
      document.getElementById('markdownContent').innerHTML = marked.parse(markdown);
    })
    .catch(error => console.error('Error loading Markdown:', error));
});
