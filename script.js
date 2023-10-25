const wordEl = document.getElementById('word');
const wrongLettersEl = document.getElementById('wrong-letters');
const playAgainBtn = document.getElementById('play-button');
const popup = document.getElementById('popup-container');
const notification = document.getElementById('notification-container');
const finalMessage = document.getElementById('final-message');

const figureParts = document.querySelectorAll('.figure-part');

const words = ["apple", "banana", "cherry", "dog", "elephant", "flower", "grape", "house", "ice cream", "jazz", "kite", "lemon", "mountain", "notebook", "orange"];

let selectedWord = words[Math.floor(Math.random() * words.length)]
const correctLetters = []
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
// update the wrong letter
function updateWrongLettersEl() {
  // Display wrong letters
  wrongLettersEl.innerHTML = `
    ${wrongLetters.length > 0 ? '<p>Wrong</p>' : ''}
    ${wrongLetters.map(letter => `<span>${letter}</span>`)}
  `;
  console.log(wrongLetters)
}


//show notification
function showNotification(){
  notification.classList.add('show')

  setTimeout(()=>{
    notification.classList.remove('show')

  },2000)


}



// KEYBOARD LISTENER
window.addEventListener('keydown', e => {
  //pay atttention to nestings
  if (e.keyCode >= 65 && e.keyCode <= 90) {
    const letter = e.key;

    if (selectedWord.includes(letter)) {
      if (!correctLetters.includes(letter)) {
        correctLetters.push(letter);

        displayWord();
      } else {
        showNotification();
      }
    } else {
      if (!wrongLetters.includes(letter)) {
        wrongLetters.push(letter);

        updateWrongLettersEl();
      } else {
        showNotification();
      }
    }
  }
});
displayWord()