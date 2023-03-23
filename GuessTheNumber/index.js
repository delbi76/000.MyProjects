const readline = require('readline');

let secretNumber = Math.floor(Math.random() * 100) + 1;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askQuestion(vway) 
{
	var vqstion='';
	if(vway == 1)
		vqstion = 'Βρες τον αριθμό μεταξύ 1 και 100: ';
	else
		vqstion = '';
	
  rl.question(vqstion, (guess) => {
    guess = parseInt(guess);
    
    if (guess === secretNumber) 
	{
      console.log('Συγχαρητήρια! Βρήκες τον Αριθμό!');
      //rl.close();
    } else if (guess < secretNumber) 
	{
      console.log('Πολύ μικρός! Προσπάθησε ξανά.');
      askQuestion(0);
    } else {
      console.log('Πολύ μεγάλος! Προσπάθησε ξανά.');
      askQuestion(0);
    }
  });
}

askQuestion(1);
