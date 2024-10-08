let userScore = 0;
let computerScore = 0;

const userScore_span = document.querySelector("#user-label");
const computerScore_span = document.querySelector("#computer-label");
const score_div = document.querySelector("#score");
const result_p = document.querySelector(".result p");

const rock_div = document.querySelector("#rock");
const paper_div = document.querySelector("#paper");
const scissors_div = document.querySelector("#scissors");

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function win(userChoice, computerChoice) {
    userScore++;
    score_div.innerHTML = `${userScore} : ${computerScore}`;
    result_p.innerHTML = `${capitalize(userChoice)} (user) Beats ${capitalize(computerChoice)} (comp). You Win!`;
}

function lose(userChoice, computerChoice) {
    computerScore++;
    score_div.innerHTML = `${userScore} : ${computerScore}`;
    result_p.innerHTML = `${capitalize(computerChoice)} (comp) Beats ${capitalize(userChoice)} (user). You Lose!`;
}

function draw(userChoice, computerChoice) {
    result_p.innerHTML = `${capitalize(userChoice)} (user) Equals ${capitalize(computerChoice)} (comp). It's a Draw!`;
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case 'rockscissors':
        case 'paperrock':
        case 'scissorspaper':
            win(userChoice, computerChoice);
            break;
        case 'rockpaper':
        case 'paperscissors':
        case 'scissorsrock':
            lose(userChoice, computerChoice);
            break;
        default:
            draw(userChoice, computerChoice);
            break;
    }
}

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

rock_div.addEventListener('click', function () {
    game("rock");
});

paper_div.addEventListener('click', function () {
    game("paper");
});

scissors_div.addEventListener('click', function () {
    game("scissors");
});
