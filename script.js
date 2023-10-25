const wordEl = document.getElementById('word');
const wrongLettersEl = document.getElementById('wrong-letters');
const playAgainBtn = document.getElementById('play-button');
const popup = document.getElementById('popup-container');
const notification = document.getElementById('notification-container');
const finalMessage = document.getElementById('final-message');

const figureParts = document.querySelectorAll('.figure-part');

const words = ["apple", "banana", "cherry", "dog", "elephant", "flower", "grape", "house", "ice cream", "jazz", "kite", "lemon", "mountain", "notebook", "orange"];

let selectedWord = words[Math.floor(Math.random() * words.length)]
const correctLetters = ['d','o', 'g']
const wrongLetters = []


// show hidden word
function displayWord() {
  wordEl.innerHTML = `
    ${selectedWord
      .split('')
      .map(
        letter => `
          <span class="letter">
            ${correctLetters.includes(letter) ? letter : ''}
          </span>
        `
      )
      .join('')}
  `;

  const innerWord = wordEl.innerText.replace(/\n/g, '');

  if (innerWord === selectedWord) {
    finalMessage.innerText = 'BOOM! You won! 😃';
    popup.style.display = 'flex';
  }
}

displayWord()