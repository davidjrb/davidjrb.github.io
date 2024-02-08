
document.addEventListener('DOMContentLoaded', function() {
    fetch('https://raw.githubusercontent.com/davidjrb/md2html/master/README.md')
      .then(response => response.text())
      .then(text => {
        document.getElementById('markdownContent').innerHTML = marked.parse(text);
      })
      .catch(err => console.error('Fetch error:', err));
  });
  