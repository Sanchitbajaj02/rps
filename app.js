let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
    const choices = ["r", "p", "s"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

function win(user, comp) {
    const smallUserWord = "(user)".fontsize(4).sub();
    const smallComprWord = "(comp)".fontsize(4).sub();
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(
        user
    )}${smallUserWord} beats ${convertToWord(comp)}${smallComprWord}. You win🔥`;
    document.getElementById(user).classList.add("green-glow");
    setTimeout(
        () => document.getElementById(user).classList.remove("green-glow"),
        300
    );
}
function lose(user, comp) {
    const smallUserWord = "(user)".fontsize(4).sub();
    const smallComprWord = "(comp)".fontsize(4).sub();
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(
        user
    )}${smallUserWord} loses to ${convertToWord(
        comp
    )}${smallComprWord}. You lost😢`;
    document.getElementById(user).classList.add("red-glow");
    setTimeout(
        () => document.getElementById(user).classList.remove("red-glow"),
        300
    );
}
function draw(user, comp) {
    const smallUserWord = "(user)".fontsize(4).sub();
    const smallComprWord = "(comp)".fontsize(4).sub();
    result_p.innerHTML = `${convertToWord(
        user
    )}${smallUserWord} equals ${convertToWord(
        comp
    )}${smallComprWord}. It's a draw😎`;
    document.getElementById(user).classList.add("gray-glow");
    setTimeout(
        () => document.getElementById(user).classList.remove("gray-glow"),
        300
    );
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "sr":
        case "ps":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "ss":
        case "pp":
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener("click", () => game("r"));
    paper_div.addEventListener("click", () => game("p"));
    scissors_div.addEventListener("click", () => game("s"));
}

main();
