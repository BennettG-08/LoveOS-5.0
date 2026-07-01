function playMusic() {
  const music = document.getElementById("music");
  music.play().catch(() => {});

  document.body.classList.add("active");

  showActivation();

  setTimeout(() => {
    document.body.classList.remove("active");
  }, 1500);
}

/* mensaje de activación */
function showActivation() {
  const msg = document.createElement("div");
  msg.innerText = "✔ CONEXIÓN ACTIVADA";
  msg.style.position = "fixed";
  msg.style.top = "10px";
  msg.style.right = "10px";
  msg.style.color = "#00ff88";
  msg.style.fontFamily = "monospace";
  msg.style.background = "black";
  msg.style.border = "1px solid #00ff88";
  msg.style.padding = "10px";
  msg.style.boxShadow = "0 0 15px #00ff88";
  msg.style.zIndex = "9999";

  document.body.appendChild(msg);

  setTimeout(() => {
    msg.remove();
  }, 2000);
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

setInterval(createParticle, 120);
