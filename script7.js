document.addEventListener("DOMContentLoaded", () => {
 
  const lines = [
    "You tried to crawl. I had to sew",
    "Your limbs back on—too soft, too slow.",
    "Love must be still to truly last,",
    "Not rot like all those lovers past."
  ];

  const typedText = document.getElementById("typedText");
  const underline = document.getElementById("underline");
  const glitchLayer = document.getElementById("glitchLayer");
  const poemLine = document.getElementById("poemLine");

  let lineIndex = 0;
  let charIndex = 0;

  function typeNextChar() {
    if (lineIndex >= lines.length) {
      underline.style.width = `${typedText.offsetWidth}px`;
      return;
    }

    const line = lines[lineIndex];

    if (charIndex === 0) {
      typedText.innerHTML += "<br>";
    }

    if (charIndex < line.length) {
      typedText.innerHTML += line.charAt(charIndex);
      charIndex++;
      underline.style.width = `${typedText.offsetWidth}px`;
      setTimeout(typeNextChar, 45);
    } else {
      lineIndex++;
      charIndex = 0;
      setTimeout(typeNextChar, 300); 
    }
  }

  setTimeout(typeNextChar, 300);

  
  poemLine.addEventListener("mouseenter", () => {
    glitchLayer.innerHTML = "";
    typedText.style.visibility = "hidden";

    lines.forEach((line) => {
      for (let j = 0; j < line.length; j++) {
        const span = document.createElement("span");
        span.className = "glitch-char";
        span.textContent = line[j];
        span.style.left = `${Math.random() * 340}px`;
        span.style.top = `${Math.random() * 500}px`;
        glitchLayer.appendChild(span);
      }
    });
  });

  poemLine.addEventListener("mouseleave", () => {
    glitchLayer.innerHTML = "";
    typedText.style.visibility = "visible";
  });

  
  const loveBox = document.getElementById("loveBox");
  const heartContainer = document.getElementById("heartContainer");
  let heartInterval;

  function spawnHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.textContent = "♥";
    heart.style.left = `${Math.random() * window.innerWidth}px`;
    heart.style.top = `${Math.random() * window.innerHeight}px`;
    heartContainer.appendChild(heart);
    setTimeout(() => {
      heart.remove();
    }, 2000);
  }

  loveBox.addEventListener("mouseenter", () => {
    heartInterval = setInterval(spawnHeart, 150);
  });

  loveBox.addEventListener("mouseleave", () => {
    clearInterval(heartInterval);
    heartContainer.innerHTML = "";
  });
});
const visual = document.querySelector(".visual");

visual.addEventListener("click", () => {
  window.location.href = "index8.html";
});
