document.addEventListener('DOMContentLoaded', () => {
  const folder1 = document.getElementById("folder1");
  const folder2 = document.getElementById("folder2");
  const folder3 = document.getElementById("folder3");
  const visual = document.getElementById("visual");
  const poemContainer = document.getElementById("poemContainer");
  const typedText = document.getElementById("typedText");

  const lines = [
    "I built a house for",
    " you, my dear,",
    " With walls of silk and",
    " chandeliers.",
    " Each window sealed, each door",
    " locked tight—",
    " To keep you safe from",
    "pain and light.",
  ];

  let lineIndex = 0;
  let charIndex = 0;
  let fullText = "";

  function typeNextChar() {
    if (lineIndex >= lines.length) {
      typedText.innerHTML = fullText; 
      return;
    }

    const currentLine = lines[lineIndex];

    if (charIndex === 0 && lineIndex !== 0) {
      fullText += "\n";
    }

    if (charIndex < currentLine.length) {
      fullText += currentLine.charAt(charIndex);
      typedText.innerHTML = fullText + '<span class="cursor">|</span>';
      charIndex++;
      setTimeout(typeNextChar, 40);
    } else {
      lineIndex++;
      charIndex = 0;
      setTimeout(typeNextChar, 300);
    }
  }

  
  folder2.style.display = "none";
  folder3.style.display = "none";
  visual.style.display = "none";
  poemContainer.style.display = "none";

  
  folder1.addEventListener('click', () => {
    folder1.classList.add("shake-glitch");

    setTimeout(() => {
      folder1.style.display = "none";
      folder1.classList.remove("shake-glitch");
      folder2.style.display = "block";
      folder2.classList.add("shake-glitch");
    }, 600);

    setTimeout(() => {
      folder2.style.display = "none";
      folder2.classList.remove("shake-glitch");
      folder3.style.display = "block";
      folder3.classList.add("shake-glitch");
    }, 1200);

    setTimeout(() => {
      folder3.classList.remove("shake-glitch");

     
      folder1.style.display = "none";
      folder2.style.display = "none";
      folder3.style.display = "none";

    
      visual.style.display = "block";
      poemContainer.style.display = "block";
      typedText.innerHTML = '<span class="cursor">|</span>';
      typeNextChar();
    }, 1800);
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const folder1 = document.getElementById("folder1");
  const folder2 = document.getElementById("folder2");
  const folder3 = document.getElementById("folder3");
  const visual = document.getElementById("visual");
  const poemContainer = document.getElementById("poemContainer");
  const typedText = document.getElementById("typedText");
  const glitchSound = document.getElementById("glitchSound");
  const flashOverlay = document.getElementById("flashOverlay");
  const errorWindow = document.getElementById("errorWindow");

  const lines = [
    "I built a house for",
    " you, my dear,",
    " With walls of silk and",
    " chandeliers.",
    " Each window sealed, each door",
    " locked tight—",
    " To keep you safe from",
    "pain and light.",
  ];

  let lineIndex = 0;
  let charIndex = 0;
  let fullText = "";

  function typeNextChar() {
    if (lineIndex >= lines.length) {
      typedText.innerHTML = fullText;
      return;
    }

    const currentLine = lines[lineIndex];

    if (charIndex === 0 && lineIndex !== 0) {
      fullText += "\n";
    }

    if (charIndex < currentLine.length) {
      fullText += currentLine.charAt(charIndex);
      typedText.innerHTML = fullText + '<span class="cursor">|</span>';
      charIndex++;
      setTimeout(typeNextChar, 40);
    } else {
      lineIndex++;
      charIndex = 0;
      setTimeout(typeNextChar, 300);
    }
  }

 
  folder2.style.display = "none";
  folder3.style.display = "none";
  visual.style.display = "none";
  poemContainer.style.display = "none";

 
  function flash() {
    flashOverlay.style.opacity = "1";
    setTimeout(() => flashOverlay.style.opacity = "0", 100);
  }

  
  folder1.addEventListener('click', () => {
    folder1.classList.add("shake-glitch");
    glitchSound.play();
    flash();

    setTimeout(() => {
      folder1.style.display = "none";
      folder1.classList.remove("shake-glitch");
      folder2.style.display = "block";
      folder2.classList.add("shake-glitch");
      glitchSound.play();
      flash();
    }, 600);

    setTimeout(() => {
      folder2.style.display = "none";
      folder2.classList.remove("shake-glitch");
      folder3.style.display = "block";
      folder3.classList.add("shake-glitch");
      glitchSound.play();
      flash();
    }, 1200);

    setTimeout(() => {
      folder3.classList.remove("shake-glitch");
      errorWindow.style.display = "flex";
    }, 1600);

    setTimeout(() => {
      errorWindow.style.display = "none";
      folder1.style.display = "none";
      folder2.style.display = "none";
      folder3.style.display = "none";

      visual.style.display = "block";
      poemContainer.style.display = "block";

      typedText.innerHTML = '<span class="cursor">|</span>';
      typeNextChar();
    }, 2500);
  });
});
const visual = document.getElementById("visual");

visual.addEventListener("click", () => {
  window.location.href = "index1.html";
});
