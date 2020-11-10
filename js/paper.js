
paper.addEventListener('click', () => { 
    DOM.classList.add('anim');
    computerChoice = Math.random();
    userChoice = 2;
    // computer choice convert to image
    if (computerChoice <= 0.3) {
        computerChoice = 1;
        computerImg = './img/computerrock.png';
    } else if (computerChoice <= 0.6) {
        computerChoice = 2;
        computerImg = './img/computerpaper.png';
    } else {
        computerChoice = 3;
        computerImg = './img/computerscissors.png';
    }
    // win or lose logic
    if (userChoice === computerChoice) {
        winLoseImg = 'DRAW';
    } else if (userChoice === 2 & computerChoice === 3) {
        winLoseImg = 'YOU LOSE';
    } else {
        winLoseImg = 'YOU WIN';
    }
   rendered.innerHTML = `
        <div class="win-lose">${winLoseImg}</div>
        <div class="images">
        <img class="userChoice" src="./img/userpaper.png" alt="user choice img">
        <img class="computerChoice" src="${computerImg}" alt="computer choice img">
        </div>
    `;
});

paper.addEventListener("click", function(){setTimeout(myFunc, 2000)});
function myFunc() {
    DOM.classList.add('invisible');
    result.classList.remove('invisible');
}
