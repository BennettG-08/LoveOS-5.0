
function playMusic() {
  const music = document.getElementById("music");
  music.play().catch(() => {});
  document.body.style.filter = "hue-rotate(120deg)";
}

/* partículas */
const container = document.getElementById("particles");

function createParticle() {
  const p = document.createElement("div");
  p.classList.add("particle");

  p.style.left = Math.random() * 100 + "vw";
  p.style.animationDuration = (2 + Math.random() * 3) + "s";

  container.appendChild(p);

  setTimeout(() => {
    p.remove();
  }, 5000);
}

setInterval(createParticle, 150);
