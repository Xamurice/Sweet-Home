document.addEventListener('DOMContentLoaded', () => {

  const text = "They know nothing about love";
  const typedText = document.getElementById("typedText");
  const cursor = document.getElementById("cursor");

  let i = 0;
  function typeChar() {
    if (i < text.length) {
      typedText.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeChar, 90);
    } else {
      cursor.style.display = "none";
    }
  }
  setTimeout(typeChar, 500);

  
  const poem = ` I let them in, those cruel old friends—
The ones who said love always ends.
They screamed when they saw you preserved,
I served them tea. They got what they deserved.`;

  const display = document.getElementById('poemDisplay');
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.,!?-–—:;()[]{}<> ";
  let revealed = Array(poem.length).fill(false);
  let current = Array.from({ length: poem.length }, (_, i) =>
    poem[i] === '\n' ? '\n' : getRandomChar()
  );

  function getRandomChar() {
    return chars[Math.floor(Math.random() * chars.length)];
  }

  function updatePoem() {
    let completed = true;

    for (let i = 0; i < poem.length; i++) {
      if (poem[i] === '\n') {
        current[i] = '\n';
        continue;
      }

      if (!revealed[i]) {
        if (Math.random() < 0.07) {
          current[i] = poem[i];
          revealed[i] = true;
        } else {
          current[i] = getRandomChar();
          completed = false;
        }
      }
    }

    display.textContent = current.join('');
    if (!completed) {
      setTimeout(updatePoem, 50);
    }
  }

  
  const hoverTarget = document.querySelector('.hover-trigger');
  const coc1 = document.querySelector('.coc-left');
  const coc3 = document.querySelector('.coc-right');
  const cocMid = document.querySelector('.coc-middle');

  hoverTarget.addEventListener('mouseenter', () => {
    coc1.classList.add('glitch-active');
    coc3.classList.add('glitch-active');
    cocMid.classList.add('glitch-active');
  });

  hoverTarget.addEventListener('mouseleave', () => {
    coc1.classList.remove('glitch-active');
    coc3.classList.remove('glitch-active');
    cocMid.classList.remove('glitch-active');
  });

  
  const poemBox = document.querySelector('.poem-type');
  const cloneTargets = [coc1, coc3, cocMid];
  let clones = [];
  let cloneInterval = null;

  function createClones() {
    cloneTargets.forEach((el) => {
      const rect = el.getBoundingClientRect();
      const clone = el.cloneNode(true);
      clone.classList.add('column-clone');
      clone.style.position = 'fixed';
      clone.style.opacity = 0.05 + Math.random() * 0.15;
      clone.style.zIndex = 398;
      clone.style.pointerEvents = 'none';

      const offsetX = Math.floor(Math.random() * 160 - 80);
      const offsetY = Math.floor(Math.random() * 100 - 50);

      clone.style.left = `${rect.left + offsetX}px`;
      clone.style.top = `${rect.top + offsetY}px`;
      clone.style.transform = `scale(1.01)`;

      document.body.appendChild(clone);
      clones.push(clone);
    });
  }

  poemBox.addEventListener('mouseenter', () => {
    cloneInterval = setInterval(createClones, 120);
  });

  poemBox.addEventListener('mouseleave', () => {
    clearInterval(cloneInterval);
    clones.forEach(clone => clone.remove());
    clones = [];
  });

 
  const coffeeWindow = document.querySelector('.coffee-window');
  const mainContent = document.querySelector('.main-content');

  coffeeWindow.addEventListener('click', () => {
    coffeeWindow.classList.add('hide');

    setTimeout(() => {
      coffeeWindow.style.display = 'none';
      mainContent.classList.remove('hidden-at-start');

      setTimeout(() => {
        updatePoem();
      }, 2000);

    }, 1200);
  });

  [coc1, coc3, cocMid].forEach(col => {
    col.addEventListener('click', () => {
      window.location.href = 'index6.html';
    });
  });
});

const backBtn = document.getElementById('backButton');
backBtn.addEventListener('click', () => {
  window.location.href = 'index4.html';
});
