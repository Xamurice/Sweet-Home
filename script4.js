document.addEventListener('DOMContentLoaded', () => {
  const poemLines = [
    "You  blinked  once.", 
    "Oh!  The  world  did  shake.",
    "I  stitched  your  eyes ",
    "for  my  own  sake.",
    "Now  every  blink  belongs",
    "to  me—",
    "A  sacred  rite,  eternally."
  ];

  const container = document.getElementById('typewriterText');
  const choiceBtn = document.querySelector('.choice-button');
  const choiceLabel = document.getElementById('choiceLabel');
  const visual1 = document.querySelector('.visual-1');
  const visual2 = document.querySelector('.visual-2');
  const mouth1 = document.querySelector('.mouth-1');
  const mouth2 = document.querySelector('.mouth-2');
  const smile = document.querySelector('.smile-window');
  const hurt = document.querySelector('.hurt-window');
  const cantSee = document.querySelector('.cant-see-window');

  const windowsToShow = document.querySelectorAll(
    '.poem-window, .smile-window, .scroll-bar, .scroll-button, .mouth-1, .mouth-2, .visual-1, .visual-2, .poem-area'
  );

  function displayPoem() {
    container.innerHTML = '';
    let delay = 0;
    poemLines.forEach((line) => {
      const lineDiv = document.createElement('div');
      const words = line.split(' ');
      words.forEach(word => {
        const span = document.createElement('span');
        span.className = 'poem-word';
        if (word === "shake." || word === "eternally.") {
          span.classList.add('no-stitch');
        }
        span.textContent = word + ' ';
        span.style.animationDelay = `${delay.toFixed(2)}s`;
        delay += 0.08;
        lineDiv.appendChild(span);
      });
      container.appendChild(lineDiv);
    });
  }

  if (choiceBtn) {
    choiceBtn.addEventListener('click', () => {
      choiceBtn.classList.add('fly-away');
      if (choiceLabel) choiceLabel.style.display = 'none';

      setTimeout(() => {
        windowsToShow.forEach(el => {
          el.classList.remove('hidden');
          el.classList.add('fade-in');
        });
      }, 1000);

      setTimeout(displayPoem, 1500);
    });
  }

  if (visual1) {
    visual1.addEventListener('mouseenter', () => {
      visual1.style.filter = 'brightness(0.5)';
    });

    visual1.addEventListener('mouseleave', () => {
      visual1.style.filter = '';
    });

    visual1.addEventListener('click', () => {
      
      const flash = document.createElement('div');
      flash.className = 'flash-overlay';
      document.body.appendChild(flash);

      setTimeout(() => {
        
        const glitchContainer = document.createElement('div');
        glitchContainer.className = 'glitch-cover';
        for (let i = 0; i < 50; i++) {
          const line = document.createElement('div');
          line.className = 'glitch-line';
          line.style.top = `${i * 2}%`;
          glitchContainer.appendChild(line);
        }
        document.body.appendChild(glitchContainer);

        setTimeout(() => {
          flash.remove();
          glitchContainer.remove();

          
          visual1.style.display = 'none';
          if (mouth1) mouth1.style.display = 'none';

          
          if (hurt) hurt.classList.remove('hidden');
          if (cantSee) cantSee.classList.remove('hidden');

         
          if (visual2) visual2.classList.add('vibrate-soft');
          if (mouth2) mouth2.classList.add('vibrate-hard');
          if (smile) smile.classList.add('vibrate-hard');
          if (hurt) hurt.classList.add('vibrate-hard');
          if (cantSee) cantSee.classList.add('vibrate-hard');

        }, 2000);
      }, 600);
    });
  }


  if (visual2) {
    visual2.addEventListener('mouseenter', () => {
      visual2.style.filter = 'brightness(1.3)';
    });
    visual2.addEventListener('mouseleave', () => {
      visual2.style.filter = '';
    });

    visual2.addEventListener('click', () => {
      window.location.href = 'index5.html';
    });
  }

  
  if (hurt) {
    hurt.addEventListener('click', () => {
      const audio = new Audio('assets/sound/woman-cry.mp3');
      audio.play();
    });
  }

  
  if (cantSee) {
    cantSee.addEventListener('click', () => {
      const darkOverlay = document.createElement('div');
      darkOverlay.className = 'dark-overlay';
      document.body.appendChild(darkOverlay);

      const spotlight = document.createElement('div');
      spotlight.className = 'spotlight';
      document.body.appendChild(spotlight);

      document.addEventListener('mousemove', (e) => {
        spotlight.style.left = `${e.pageX - 100}px`;
        spotlight.style.top = `${e.pageY - 100}px`;
      });
    });
  }
});
element.style.animationDuration = `${Math.random() * 0.3 + 0.2}s`;
