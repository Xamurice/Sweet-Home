document.addEventListener("DOMContentLoaded", () => {
  const poem = `I feed you songs and rosewater wine,
I carved your name in every spine.
You never need to speak or run—
Your silence means the spell’s begun.`;

  const container = document.getElementById("poemContainer");
  let delay = 0;

  poem.split("\n").forEach(line => {
    const lineDiv = document.createElement("div");

    for (let char of line) {
      const span = document.createElement("span");

      if (char === " ") {
        
        span.innerHTML = "&nbsp;";
        span.classList.add("poem-letter", "space");
      } else {
        span.textContent = char;
        span.classList.add("poem-letter", "hoverable");
      }

      span.style.animationDelay = `${delay}s`;
      lineDiv.appendChild(span);
      delay += 0.03;
    }

    container.appendChild(lineDiv);
    delay += 0.2;
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const visual = document.getElementById("visualWindow");
  visual.addEventListener("click", () => {
    window.location.href = "index2.html";
  });
});
