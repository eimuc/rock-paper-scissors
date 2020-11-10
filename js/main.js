const DOM = document.querySelector('.container');
const resultDOM = document.querySelector('.result');
const rockDOM = document.querySelector('.rock');
const paperDOM = document.querySelector('.paper');
const scissorsDOM = document.querySelector('.scissors');
const playAgainDOM = document.querySelector('.button');

rockDOM.addEventListener('click', () => { DOM.classList.add('anim'); });

rockDOM.addEventListener("click", function(){setTimeout(myFunc, 2000)});
function myFunc() {
    DOM.classList.add('invisible');
    resultDOM.classList.remove('invisible');
}

paperDOM.addEventListener('click', () => { DOM.classList.add('anim'); });

paperDOM.addEventListener("click", function(){setTimeout(myFunc, 2000)});
function myFunc() {
    DOM.classList.add('invisible');
    resultDOM.classList.remove('invisible');
}

scissorsDOM.addEventListener('click', () => { DOM.classList.add('anim'); });

scissorsDOM.addEventListener("click", function(){setTimeout(myFunc, 2000)});
function myFunc() {
    DOM.classList.add('invisible');
    resultDOM.classList.remove('invisible');
}



playAgainDOM.addEventListener('click', () => { 
    DOM.classList.remove('anim');
    DOM.classList.remove('invisible');
    resultDOM.classList.add('invisible');
});