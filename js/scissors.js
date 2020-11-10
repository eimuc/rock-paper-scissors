scissors.addEventListener('click', () => { 
    DOM.classList.add('anim');
    computerChoice = Math.random();
    userChoice = 3;
    // computer choice convert to image
    if (computerChoice <= 0.3) {
        computerChoice = 1;
        computerImg = './img/resultrockAI.png';
    } else if (computerChoice <= 0.6) {
        computerChoice = 2;
        computerImg = './img/resultpaperAI.png';
    } else {
        computerChoice = 3;
        computerImg = './img/resultscissorsAI.png';
    }
    // win or lose logic
    if (userChoice === computerChoice) {
        winLoseImg = 'DRAW';
    } else if (userChoice === 3 & computerChoice === 1) {
        winLoseImg = 'YOU LOSE';
    } else {
        winLoseImg = 'YOU WIN';
    }
    rendered.innerHTML = `
        <div class="win-lose">${winLoseImg}</div>
        <div class="images">
        <img class="userChoice" src="./img/resultscissors.png" alt="user choice">
        <img class="computerChoice" src="${computerImg}" alt="computer choice">
        </div>
    `;
});

scissors.addEventListener("click", function(){setTimeout(myFunc, 2000)});
function myFunc() {
    DOM.classList.add('invisible');
    result.classList.remove('invisible');
}
