const sonic = document.querySelector(".sonic");
const eggman = document.querySelector(".eggman");
const fundo = document.querySelector(".fundo");
const nuvens = document.querySelector(".nuvens");
const score = document.querySelector(".score");
const startScreen = document.querySelector(".start-screen");
const startButton = document.querySelector(".start-button");
const gameContainer = document.querySelector(".gameplay");
const restartButton = document.querySelector(".restart-button");
let count = 0;

let somAcerto = document.querySelector('#somAcerto');
let somErro = document.querySelector('#somErro');

let gameStarted = false;

// Função para reiniciar o jogo
const restartGame = () => {
  count = 0;
  sonic.src = "./Arquivos/Sonic.gif";
  sonic.style.width = "100px";
  nuvens.src = "./Arquivos/nuvens.png";
  fundo.src = "./Arquivos/Fundo.png";
  eggman.style.animation = "2s eggman_animation infinite linear";
  nuvens.style.animation = "30s nuvens_animation infinite linear";
  score.innerHTML = "PONTOS: 0";
  restartButton.style.display = "none";

  // Redireciona para a tela de início
  window.location.reload(); // Isso recarrega a página, você pode ajustar conforme necessário
};

// Adicione um evento de clique ao botão de reinício
restartButton.addEventListener("click", restartGame);

const jump = () => {
  if (!gameStarted) {
    gameStarted = true;
    startGame();
  }

  sonic.classList.add("jump");
  sonic.src = "./Arquivos/Sonic-Jump.gif";
  somAcerto.play();

  setTimeout(() => {
    sonic.classList.remove("jump");
    sonic.src = "./Arquivos/Sonic.gif";
  }, 300);
};

const startGame = () => {
  startScreen.style.display = "none";
  gameContainer.style.display = "block";

  const loop = setInterval(() => {
    const eggmanPosition = eggman.offsetLeft;
    const sonicPosition = +window
      .getComputedStyle(sonic)
      .bottom.replace("px", "");

    if (eggmanPosition < 110 && eggmanPosition > 0 && sonicPosition < 40) {
      eggman.style.animation = "none";
      eggman.style.left = `${eggmanPosition}px`;

      sonic.style.animation = "none";
      sonic.src = "./Arquivos/perdeu.png";
      sonic.style.width = "50px";

      nuvens.style.animation = "none";
      nuvens.src = "./Arquivos/nuvens-perdeu.png";
      nuvens.style.width = "50px";

      fundo.src = "./Arquivos/GameoverSMB-1.png";

      clearInterval(loop);

      restartButton.style.display = "block"; // Mostra o botão de reinício
    }

    count++;
    score.innerHTML = `PONTOS: ${count}`;
  }, 10);
};

startButton.addEventListener("click", () => {
  if (!gameStarted) {
    gameStarted = true;
    startGame();
  }
});

document.addEventListener("click", jump);
