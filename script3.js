document.addEventListener('DOMContentLoaded', () => {
  const lines = [
    "The flowers died, but",
    " I replant,",
    " With skin and smiles",
    " from those who chant",
    " They come, they kneel,",
    " they think they are you—",
    " But none can match",
    " your perfect hue."
  ];

  const container = document.getElementById("typewriterText");
  let lineIndex = 0;
  let charIndex = 0;
  let currentSpan = null;
  let cursorSpan = null;

  function typeNextChar() {
    if (lineIndex >= lines.length) {
      if (cursorSpan) cursorSpan.remove();
      return;
    }

    const line = lines[lineIndex];

    if (charIndex === 0) {
      currentSpan = document.createElement('div');
      currentSpan.classList.add('line');
      cursorSpan = document.createElement('span');
      cursorSpan.classList.add('cursor');
      cursorSpan.textContent = '|';
      currentSpan.appendChild(cursorSpan);
      container.appendChild(currentSpan);
    }

    if (charIndex < line.length) {
      cursorSpan.insertAdjacentText("beforebegin", line.charAt(charIndex));
      charIndex++;
      setTimeout(typeNextChar, 40);
    } else {
      charIndex = 0;
      lineIndex++;
      setTimeout(typeNextChar, 400);
    }
  }

  setTimeout(typeNextChar, 800);
});

document.addEventListener('DOMContentLoaded', () => {
  const loveText = document.querySelector('.love-text');

  loveText.addEventListener('mouseenter', () => {
    let spawnCount = 0;
    const maxSpawn = 200;

    const spawnInterval = setInterval(() => {
      if (spawnCount >= maxSpawn) {
        clearInterval(spawnInterval);
        return;
      }

      const text = document.createElement('div');
      text.className = 'my-love-text';
      text.innerText = 'My Love';

      const x = Math.random() * 1300 + 50;
      const y = Math.random() * 700 + 50;
      text.style.left = `${x}px`;
      text.style.top = `${y}px`;

      document.body.appendChild(text);
      spawnCount++;
    }, 50);
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const loveText = document.querySelector('.love-text');
  const wrapper = document.querySelector('.wrapper');
  let intervalId;

  loveText.addEventListener('mouseenter', () => {
    let spawnCount = 0;
    const maxSpawn = 200;

    intervalId = setInterval(() => {
      if (spawnCount >= maxSpawn) {
        clearInterval(intervalId);
        return;
      }

      const text = document.createElement('div');
      text.className = 'my-love-text';
      text.innerText = 'My Love';

      const wrapperRect = wrapper.getBoundingClientRect();
      const x = Math.random() * (wrapper.clientWidth - 160);
      const y = Math.random() * (wrapper.clientHeight - 40);
      text.style.left = `${x}px`;
      text.style.top = `${y}px`;

      wrapper.appendChild(text);
      spawnCount++;
    }, 40);
  });

  loveText.addEventListener('mouseleave', () => {
    clearInterval(intervalId);
    const hearts = document.querySelectorAll('.my-love-text');
    hearts.forEach(el => {
      el.style.animation = 'fadeOut 1s forwards';
      setTimeout(() => el.remove(), 1000);
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const loveText = document.querySelector('.love-text');
  const wrapper = document.querySelector('.wrapper');

  let interval;
  const loveElements = [];

  function createMyLove() {
    const div = document.createElement('div');
    div.textContent = 'My Love';
    div.classList.add('blood-love');

    const x = Math.random() * (1600 - 200);
    const y = Math.random() * (900 - 40); 
    div.style.left = `${x}px`;
    div.style.top = `${y}px`;

    wrapper.appendChild(div);
    loveElements.push(div);

   
    if (loveElements.length > 50) {
      const old = loveElements.shift();
      old.style.transition = 'opacity 1s ease';
      old.style.opacity = '0';
      setTimeout(() => old.remove(), 1000);
    }
  }

  loveText.addEventListener('mouseenter', () => {
    interval = setInterval(createMyLove, 80);
  });

  loveText.addEventListener('mouseleave', () => {
    clearInterval(interval);
    loveElements.forEach(el => {
      el.style.transition = 'opacity 1s ease';
      el.style.opacity = '0';
      setTimeout(() => el.remove(), 1000);
    });
    loveElements.length = 0;
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const loveText = document.querySelector('.love-text');
  const wrapper = document.querySelector('.wrapper');
  const visualWindow = document.querySelector('.visual-window');

  let interval;
  const loveElements = [];

  function isInsideVisualWindow(x, y) {
    const rect = visualWindow.getBoundingClientRect();
    return (
      x >= rect.left &&
      x <= rect.right &&
      y >= rect.top &&
      y <= rect.bottom
    );
  }

  function createMyLove() {
    const div = document.createElement('div');
    div.textContent = 'My Love';
    div.classList.add('blood-love');

    const x = Math.random() * (1600 - 180);
    const y = Math.random() * (900 - 40);
    div.style.left = `${x}px`;
    div.style.top = `${y}px`;

    wrapper.appendChild(div);
    loveElements.push(div);

   
    if (loveElements.length > 60) {
      const old = loveElements.shift();
      old.style.transition = 'opacity 1s ease';
      old.style.opacity = '0';
      setTimeout(() => old.remove(), 1000);
    }
  }

  loveText.addEventListener('mouseenter', () => {
    interval = setInterval(createMyLove, 60);
  });

  loveText.addEventListener('mouseleave', () => {
    clearInterval(interval);

    loveElements.forEach(el => {
      const x = parseFloat(el.style.left);
      const y = parseFloat(el.style.top);
      const pointX = x + 50;
      const pointY = y + 15;

      
      if (!isInsideVisualWindow(pointX, pointY)) {
        el.style.transition = 'opacity 1s ease';
        el.style.opacity = '0';
        setTimeout(() => el.remove(), 1000);
      }
    });

    
    const filtered = loveElements.filter(el => {
      const x = parseFloat(el.style.left);
      const y = parseFloat(el.style.top);
      const px = x + 50;
      const py = y + 15;
      return isInsideVisualWindow(px, py);
    });

    loveElements.length = 0;
    loveElements.push(...filtered);
  });

 
  visualWindow.addEventListener('click', () => {
    window.location.href = 'index4.html';
  });
});
visualWindow.addEventListener('click', () => {
  window.location.href = 'index4.html';
});
const visualWindow = document.querySelector('.visual-window');
visualWindow.addEventListener('click', () => {
  window.location.href = 'index4.html';
});
const lineDiv = document.createElement('div');
lineDiv.classList.add('line');
lineDiv.textContent = currentLine;
document.addEventListener('DOMContentLoaded', () => {
  const loveText = document.querySelector('.love-text');
  const wrapper = document.querySelector('.wrapper');
  const visualWindow = document.querySelector('.visual-window');
  const poemBox = document.getElementById('typewriterText');
  let interval;
  let myLoveElements = [];

  
  loveText.addEventListener('mouseenter', () => {
    clearInterval(interval);
    interval = setInterval(() => {
      const myLove = document.createElement('div');
      myLove.className = 'love-flood';
      myLove.textContent = 'My Love';

      
      myLove.style.fontSize = `${Math.floor(Math.random() * 30 + 24)}px`;

    
      myLove.style.top = `${Math.random() * window.innerHeight}px`;
      myLove.style.left = `${Math.random() * window.innerWidth}px`;

     
      wrapper.appendChild(myLove);
      myLoveElements.push(myLove);
    }, 80);
  });

  
  loveText.addEventListener('mouseleave', () => {
    clearInterval(interval);
    myLoveElements.forEach(el => {
      el.style.transition = 'opacity 1s ease';
      el.style.opacity = 0;
      setTimeout(() => el.remove(), 1000);
    });
    myLoveElements = [];
  });

  
  poemBox.addEventListener('mouseenter', () => {
    poemBox.classList.add('glitch');
  });

  poemBox.addEventListener('mouseleave', () => {
    poemBox.classList.remove('glitch');
  });

  
  visualWindow.addEventListener('click', () => {
    window.location.href = 'index4.html';
  });

  
  visualWindow.addEventListener('mouseenter', () => {
    visualWindow.style.transition = 'transform 0.3s ease';
    visualWindow.style.transform = 'scale(1.05)';
  });

  visualWindow.addEventListener('mouseleave', () => {
    visualWindow.style.transform = 'scale(1)';
  });
});
