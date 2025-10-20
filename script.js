const revealBtn = document.getElementById("revealBtn");
const hiddenContent = document.getElementById("hiddenContent");
const container = document.querySelector(".container");
const heartsContainer = document.querySelector(".hearts");

// Função para criar corações
function createHearts(number) {
  for (let i = 0; i < number; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw"; // posição horizontal aleatória
    heart.style.fontSize = (Math.random() * 1.5 + 1) + "rem"; // tamanho aleatório
    heart.style.animationDuration = (Math.random() * 5 + 5) + "s"; // velocidade aleatória
    heart.style.opacity = Math.random();
    heartsContainer.appendChild(heart);
    heart.textContent = "❤️";
  }
}

// Gera 50 corações
createHearts(50);

// Evento do botão
revealBtn.addEventListener("click", () => {
  // Fade out do botão
  revealBtn.classList.add("fade-out");

  // Mostra conteúdo
  hiddenContent.classList.remove("hidden");
  hiddenContent.classList.add("show");

  // Move container suavemente para cima
  container.style.transform = "translateY(-60px)";

  // Remove botão do fluxo após a transição
  revealBtn.addEventListener("transitionend", (e) => {
    if (e.propertyName === "opacity") {
      revealBtn.style.display = "none";
    }
  }, { once: true });
});
