document.getElementById("year").textContent = new Date().getFullYear();

// Petite animation d'apparition des boutons
document.querySelectorAll(".link").forEach((el, i) => {
  el.style.animationDelay = `${150 + i * 110}ms`;
});
