fetch('content.json')
  .then(response => response.json())
  .then(data => {
    const mediaDiv = document.getElementById('media');
    data.projects.forEach(project => {
      const div = document.createElement('div');
      div.innerHTML = \`
        <h2>\${project.title}</h2>
        <p>\${project.description}</p>
        <a href="\${project.link}" target="_blank">View project</a>
      \`;
      div.style.marginBottom = "2rem";
      mediaDiv.appendChild(div);
    });
  });