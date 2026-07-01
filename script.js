function playMusic() {
  const music = document.getElementById("music");

  // intenta reproducir música
  music.play().catch(() => {
    console.log("Autoplay bloqueado por el navegador");
  });

  // efecto hacker visual al activar
  document.body.style.filter = "hue-rotate(120deg)";
}
