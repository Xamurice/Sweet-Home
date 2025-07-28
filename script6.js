document.addEventListener('DOMContentLoaded', () => {
  const visual = document.getElementById('visualWindow');
  if (visual) {
    visual.addEventListener('click', () => {
      window.location.href = 'index7.html';
    });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const visual = document.getElementById('visualWindow');
  if (visual) {
    visual.addEventListener('click', () => {
      window.location.href = 'index7.html';
    });
  }
});
document.addEventListener('DOMContentLoaded', () => {
  const hotspot = document.getElementById('visualHotspot');
  if (hotspot) {
    hotspot.addEventListener('click', () => {
      window.location.href = 'index7.html';
    });
  }
});
document.addEventListener('DOMContentLoaded', () => {
 
  const lines = document.querySelectorAll('.poem-text .line');
  lines.forEach((line, index) => {
    line.style.setProperty('--delay', `${index * 300}ms`);
  });

 
  const visual = document.getElementById('visualWindow');
  if (visual) {
    visual.addEventListener('click', () => {
      window.location.href = 'index7.html';
    });
  }

  
  const hotspot = document.getElementById('visualHotspot');
  if (hotspot) {
    hotspot.addEventListener('click', () => {
      window.location.href = 'index7.html';
    });
  }
});
document.addEventListener('DOMContentLoaded', () => {
  const lines = document.querySelectorAll('.poem-text .line');

  lines.forEach((line, index) => {
    
    line.style.setProperty('--delay', `${index * 300}ms`);


    const text = line.textContent;
    line.innerHTML = '';
    [...text].forEach((char, i) => {
      const span = document.createElement('span');
      span.className = 'char';
      span.textContent = char;
      span.style.setProperty('--char-delay', `${i * 20}ms`);
      line.appendChild(span);
    });
  });
});
