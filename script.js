const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const scoreElement = document.getElementById('score');
const highScoreElement = document.getElementById('highscore-value');
const playAgainBtn = document.getElementById('play-again');

let score = 0;
let highScore = localStorage.getItem('highscore') || 0;
let gameLoop;

const jump = () => {
  mario.classList.add('jump');

  setTimeout(() => {
    mario.classList.remove('jump');
  }, 500);
};


const loop = () => {
  gameLoop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');


    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

    
       // pipe.style.animation = 'block'
        //pipe.style.left = `${pipePosition}px`
    
        //mario.style.animation = 'block'
       // mario.style.bottom = `${marioPosition}px`
        playAgainBtn.style.display = 'block';
    
      if (score > highScore) {
        highScore = score;
        localStorage.setItem('highscore', highScore);
        highScoreElement.innerHTML = highScore;
      }


      clearInterval(gameLoop);
    }

    if (pipePosition > 0) {
      score += 1;
      scoreElement.innerHTML = score;
    }
  }, 10);
};

const startGame = () => {
    

  playAgainBtn.style.display = 'none';


  score = 0;
  scoreElement.innerHTML = score;


  loop();
};

const restartGame = () => {
 
    playAgainBtn.style.width = '500px';
    playAgainBtn.style.height = '100px';
    playAgainBtn.style.position = 'absolute';
    playAgainBtn.style.top = '30%';
    playAgainBtn.style.left = '40%';
    playAgainBtn.style.right = '0';
    playAgainBtn.style.bottom = '0';
  
    startGame();
  };
document.addEventListener('keydown', jump);


playAgainBtn.addEventListener('click', restartGame);


highScoreElement.innerHTML = highScore;


startGame();