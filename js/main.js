const DOM = document.querySelector('.container');
const result = document.querySelector('.result');
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const playAgain = document.querySelector('.button');
const rendered = document.querySelector('.rendered');
let computerChoice = Math.random();
let userChoice = 0;
let computerImg = 0;
let winLose = 0;
let winLoseResult = 0;

playAgain.addEventListener('click', () => { 
    DOM.classList.remove('anim');
    DOM.classList.remove('invisible');
    result.classList.add('invisible');
});