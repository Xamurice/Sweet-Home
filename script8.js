document.addEventListener('DOMContentLoaded', () => {
  const text = `I made this world for just us two.
You’re mine, and I take care of you.
Though others rot, and seasons flee,
This house remains… and so will we.`;

  const typedText = document.getElementById("typedText");
  const cursor = document.getElementById("cursor");
  const container = document.getElementById("typedContainer");
  const blackout = document.getElementById("blackout");

  let i = 0;

  function typeChar() {
    if (i < text.length) {
      const char = text.charAt(i);
      typedText.innerHTML += (char === "\n") ? "<br>" : char;
      i++;
      setTimeout(typeChar, 45);
    } else {
      cursor.style.display = "none";
    }
  }

  setTimeout(typeChar, 500);

 
  container.addEventListener("click", () => {
    blackout.style.display = "flex";
  });
});
