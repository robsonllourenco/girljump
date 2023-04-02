const sonic = document.querySelector(".sonic");
const eggman = document.querySelector(".eggman");
const fundo = document.querySelector(".fundo");
const nuvens = document.querySelector(".nuvens");
const score = document.querySelector(".score");
let count = 0;

let somAcerto = document.querySelector('#somAcerto')
let somErro = document.querySelector('#somErro')

const jump = () => {
  sonic.classList.add("jump");
  sonic.src = "./Arquivos/Sonic-Jump.gif";
  somAcerto.play()

  setTimeout(() => {
    sonic.classList.remove("jump");
    sonic.src = "./Arquivos/Sonic.gif";
  }, 900);
};

const loop = setInterval(() => {
  const eggmanPosition = eggman.offsetLeft;
  const sonicPosition = +window
    .getComputedStyle(sonic)
    .bottom.replace("px", "");

  if (eggmanPosition < 110 && eggmanPosition > 0 && sonicPosition < 150) {
    eggman.style.animation = "none";
    eggman.style.left = `${eggmanPosition}px`;
    
    sonic.style.animation = "none";
    sonic.src = "./Arquivos/perdeu.png";
    sonic.style.width = "50px";
  
    nuvens.style.animation = "none";
    nuvens.src = "./Arquivos/nuvens-perdeu.png";
    nuvens.style.width = "50px";


    fundo.src = "./Arquivos/GameoverSMB-1.png";

    count.style.animation = "none";
    count.src = "./Arquivos/nuvens-perdeu.png";
    count.style.width = "50px";
  
  }


  count++;
  score.innerHTML = `PONTOS: ${count}`;

  
  
}, 10);

document.addEventListener("click", jump);
