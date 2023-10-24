const wordEl = document.getElementById('word')
const wrongLettersEl = document.getElementById('wrong-letters')
const  playAgainBtn= document.getElementById('play-again')
const popup  = document.getElementById('pop-container')
const notification = document.getElementById('notification-container')
const finalMessage = document.getElementById('final-message')

const figureParts = document.querySelectorAll('.figure-part')

const words = ["apple", "banana", "cherry", "dog", "elephant", "flower", "grape", "house", "ice cream", "jazz", "kite", "lemon", "mountain", "notebook", "orange"];

let selectedWord = words[Math.floor(Math.random() * words.length)]
console.log(selectedWord)
