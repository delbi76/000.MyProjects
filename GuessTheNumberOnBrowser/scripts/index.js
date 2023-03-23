// Find the elements
const guessButton = document.getElementById('guess-button');
guessButton.addEventListener('click', processGuess);

const guessInput = document.getElementById('guess-input');

const feedbackContainer = document.getElementById('feedback');
const playAgainContainer = document.getElementById('again-container');

const playAgainButton = document.getElementById('again-button');
playAgainButton.addEventListener('click', startGame);

// Start the game
let randomNumber;
startGame();

// Supporting functions
function startGame()
{
  displayPlayAgain(false);

  if (feedbackContainer) 
    feedbackContainer.innerHTML = '';

  if (guessInput) 
    guessInput.value = '';
 
  randomNumber = generateRandomNumber(100);
}

function displayPlayAgain(display) 
{
  if (playAgainContainer) 
  {
    if (display) 
      playAgainContainer.style.display = 'block';
     else 
      playAgainContainer.style.display = 'none';
  }
}

function generateRandomNumber(max) 
{
  const result = Math.floor(Math.random() * max) + 1;
  return result;
}

function processGuess() 
{
  let feedbackText;
  if (guessInput)
  {
    const guess = guessInput.valueAsNumber;

    if (guess === randomNumber) 
	{
      feedbackText = `Ξ¤ΞΏ ${guess} ΞµΞ―Ξ½Ξ±ΞΉ ΟƒΟ‰ΟƒΟ„Ο� ... Ξ�Ξ­Ο�Ξ΄ΞΉΟƒΞµΟ‚!`;
      displayPlayAgain(true);
    } 
	else if (guess > randomNumber) 
	{
      feedbackText = `Ξ¤ΞΏ ${guess} ΞµΞ―Ξ½Ξ±ΞΉ Ο€ΞΏΞ»Ο� ΞΌΞµΞ³Ξ¬Ξ»ΞΏ`;
    } 
	else
      feedbackText = `Ξ¤ΞΏ ${guess} ΞµΞ―Ξ½Ξ±ΞΉ Ο€ΞΏΞ»Ο� ΞΌΞΉΞΊΟ�Ο�`;
  }
  if (feedbackContainer)
    feedbackContainer.innerHTML += '<br>' + feedbackText;
}
