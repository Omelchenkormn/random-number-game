'use strict';
const body = document.querySelector('body');
const message = document.querySelector('.message');
const againBtn = document.querySelector('.again');
const curNum = document.querySelector('.number');
const score = document.querySelector('.score');
const btn = document.querySelector('.check');
const highScoreDisplay = document.querySelector('.highscore');

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let scoreNum = 20;
let highScore = 0;

const displayMessage = (messageIn) => {
  return (message.textContent = `${messageIn}`);
};

Number((highScoreDisplay.textContent = highScore));

btn.addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('⛔️ No number');
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct number ');

    body.style.backgroundColor = 'green';
    curNum.style.width = '30rem';
    curNum.textContent = secretNumber;
    if (scoreNum > highScore) {
      Number((highScoreDisplay.textContent = scoreNum));
    }
  } else if (guess !== secretNumber) {
    if (scoreNum > 1) {
      message.textContent =
        guess > secretNumber
          ? displayMessage('📈 To high ')
          : displayMessage('📉 To low ');
      scoreNum--;
      score.textContent = scoreNum;
    } else {
      displayMessage('💥 You lost the game  ');
      score.textContent = 0;
    }
  }
});

againBtn.addEventListener('click', function () {
  scoreNum = 20;
  score.textContent = scoreNum;
  displayMessage('Start guessing...');
  secretNumber;
  const guess = (document.querySelector('.guess').value = '');
  body.style.backgroundColor = '#222';
  curNum.style.width = '15rem';
  curNum.textContent = '?';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
});
