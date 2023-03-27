const guessButton = document.getElementById('guess-button');
guessButton.addEventListener('click', processGuess);

const guessInput = document.getElementById('guess-input');

guessInput.addEventListener("keypress", function(event) 
{
  if (event.key === "Enter")
  { 
    if(playAgainContainer.style.display != 'block')
      processGuess();
    else
      startGame();   
  }
});

const feedbackContainer = document.getElementById('feedback');
const playAgainContainer = document.getElementById('again-container');
const playButtonContainer = document.getElementById('button-container');

const playAgainButton = document.getElementById('again-button');
playAgainButton.addEventListener('click', startGame);

// Έναρξη Παιχνιδιού
let randomNumber;
startGame();

// functions
function startGame()
{
  displayPlayButton(true);
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

function displayPlayButton(display) 
{
  if (playButtonContainer) 
  {
    if (display) 
      playButtonContainer.style.display = 'block';
    else 
      playButtonContainer.style.display = 'none';
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
      feedbackText = `Το ${'<span style="font-weight:bold;">'}${guess}${'</span>'} είναι σωστό... ${'<span style="font-weight:bold;">'} Κέρδισες!${'</span>'}`;

      displayPlayButton(false);
      displayPlayAgain(true);
    } 
    else if (guess > randomNumber) 
        feedbackText = `Το ${'<span style="font-weight:bold;">'}${guess}${'</span>'} είναι ${'<l style="color:blue;">'} μεγάλο${'</l>'}. Δοκίμασε πάλι!`;
    else
      feedbackText = `Το ${'<span style="font-weight:bold;">'}${guess}${'</span>'} είναι ${'<l style="color:red;">'} μικρό${'</l>'}. Δοκίμασε πάλι!`;
  }

  if (feedbackContainer)
  {
    if(guessInput.value.length == 0)
      alert('Ε δώσε έναν αριθμό ντε...');
    else
    {
      //feedbackContainer.innerHTML += '<br>' + feedbackText;

      feedbackContainer.innerHTML = '<br>' + feedbackText + feedbackContainer.innerHTML;
    }
  }

  guessInput.value = ''; 
}