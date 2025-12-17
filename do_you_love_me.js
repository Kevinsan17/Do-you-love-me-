const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container");
const gifResult = document.querySelector(".gif-result");
const heartLoader = document.querySelector(".cssload-main");
const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");

// Cambiar la posición del botón NO
noBtn.addEventListener("mouseover", () => {
  const newX = Math.floor(Math.random() * questionContainer.offsetWidth);
  const newY = Math.floor(Math.random() * questionContainer.offsetWidth);

  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
});

// Funcionalidad del botón YES
yesBtn.addEventListener("click", () => {
  questionContainer.style.display = "none";
  heartLoader.style.display = "inherit";

  const timeoutId = setTimeout(() => {
    heartLoader.style.display = "none";
    resultContainer.style.display = "inherit";

    // Si decidiste dejar el video, descomenta la línea de abajo:
    // gifResult.play(); 

    // --- EFECTO DE CONFETI ---
    // Esto lanza confeti desde el centro
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ff6b81', '#ffa4b1', '#ffffff'] // Colores a juego con tu tema
    });

    // Lluvia de confeti continua por unos segundos (opcional)
    var duration = 3000;
    var end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#ff6b81', '#ffa4b1']
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#ff6b81', '#ffa4b1']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());

  }, 3000);
});
