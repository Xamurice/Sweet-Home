document.addEventListener('DOMContentLoaded', () => {
  
  const text = "for my girl...\nerror666";
  const typedTextSpan = document.getElementById("typedText");
  const cursorSpan = document.getElementById("cursor");
  let charIndex = 0;

  typedTextSpan.innerHTML = "";
  cursorSpan.style.display = "inline-block";

  function typeChar() {
    if (charIndex < text.length) {
      const currentChar = text.charAt(charIndex);
      if (currentChar === "\n") {
        typedTextSpan.innerHTML += "<br>";
      } else {
        typedTextSpan.innerHTML += currentChar;
      }
      charIndex++;
      setTimeout(typeChar, 100);
    } else {
      cursorSpan.style.display = "none";
    }
  }

  setTimeout(typeChar, 500);

 
  const yesBtn = document.querySelector('.yes-button');
  const noBtn = document.querySelector('.no-button');
  const visual2 = document.querySelector('.visual2');
  const mouth1 = document.querySelector('.mouth1');
  const mouth2 = document.querySelector('.mouth2');
  const smile = document.querySelector('.smile-window');

  if (visual2) {
    visual2.style.display = "none";
    visual2.style.pointerEvents = "none";
  }

  
  [yesBtn, noBtn].forEach(btn => {
    if (!btn) return;

    btn.style.pointerEvents = "auto";

    btn.addEventListener('mouseenter', () => {
      btn.style.transform = 'scale(1.1)';
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'scale(1.0)';
    });

    btn.addEventListener('click', () => {
        
    
      const whiteScreen = document.createElement("div");
      whiteScreen.classList.add("overlay-screen");

      const message = document.createElement("div");
      message.classList.add("overlay-text");
      message.textContent = "No one can replace her";

      document.body.appendChild(whiteScreen);
      document.body.appendChild(message);

      requestAnimationFrame(() => {
        whiteScreen.style.display = "flex";
        message.style.opacity = 1;
      });

      
      setTimeout(() => {
        whiteScreen.remove();
        message.remove();

        if (mouth1) mouth1.style.display = "none";

        if (visual2) {
          visual2.style.display = "block";
          visual2.classList.add("glitch-shake");
          visual2.style.pointerEvents = "auto";
          visual2.style.cursor = "pointer";

          if (!visual2.dataset.bound) {
            visual2.dataset.bound = "true";

            visual2.addEventListener("mouseenter", () => {
              visual2.style.transform = "scale(1.07)";
              visual2.style.transition = "transform 0.2s ease";
            });

            visual2.addEventListener("mouseleave", () => {
              visual2.style.transform = "scale(1)";
            });

            visual2.addEventListener("click", () => {
              window.location.href = "index3.html";
            });
          }
        }

        if (mouth2) mouth2.classList.add("glitch-shake");
        if (smile) smile.classList.add("glitch-shake");
      }, 3000);
    });
  });

 
  const backButton = document.getElementById("backButton");
  if (backButton) {
    backButton.addEventListener("click", () => {
      window.location.href = "index1.html";
    });
  }
});
