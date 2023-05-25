document.addEventListener('DOMContentLoaded', function() {
    const playBtn = document.getElementById('play-btn');
    const userSelectionButtons = document.querySelectorAll('.user-selection button');
    const resultText = document.getElementById('result-text');
  
    // Array of possible choices
    const choices = ['rock', 'paper', 'scissors'];
  
    // Function to generate random computer choice
    function generateComputerChoice() {
      const randomIndex = Math.floor(Math.random() * choices.length);
      return choices[randomIndex];
    }
  
    // Function to compare user and computer choices and determine the winner
    function determineWinner(userChoice, computerChoice) {
      if (userChoice === computerChoice) {
        return 'It\'s a tie!';
      } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
      ) {
        return 'You win!';
      } else {
        return 'Computer wins!';
      }
    }
  
    // Function to handle user selection
    function handleUserSelection(e) {
      const userChoice = e.target.id;
      const computerChoice = generateComputerChoice();
      const result = determineWinner(userChoice, computerChoice);
      resultText.textContent = `You chose ${userChoice}. Computer chose ${computerChoice}. ${result}`;
    }
  
    // Function to reset the result
    function resetResult() {
      resultText.textContent = '';
    }
  
    // Attach event listeners
    userSelectionButtons.forEach(function(button) {
      button.addEventListener('click', handleUserSelection);
    });
  
    playBtn.addEventListener('click', resetResult);
  });
  