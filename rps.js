
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    let options = ['rock', 'paper', 'scissors'];
    let randomnumber = Math.floor(Math.random() * 3);
    return options[randomnumber];
}

const rockButton = document.querySelector('#rock');
    rock.addEventListener('click', (e) => {
        let playerSelection = 'rock';
        let computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
})

const paperButton = document.querySelector('#paper');
    paper.addEventListener('click', (e) => {
        let playerSelection = 'paper';
        let computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
})

const scissorsButton = document.querySelector('#scissors');
    scissors.addEventListener('click', (e) => {
        let playerSelection = 'scissors';
        let computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
})

const game = document.querySelector('.game');
const scores = document.createElement('div');  
scores.innerHTML = `Lets play!<br/> Youre score: ${playerScore} Computer score: ${computerScore}`;  
game.appendChild(scores);
scores.style.fontSize = '20px';
scores.style.marginTop = '40px';


const playRound = (playerSelection, computerSelection) => {
    
    if(playerSelection === computerSelection) {
        scores.innerHTML =  `Its a draw.<br/> Youre score: ${playerScore} Computer score: ${computerScore}`;
    }
    else if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore += 1;
        scores.innerHTML =  `Paper beats rock.<br/> Youre score: ${playerScore} Computer score: ${computerScore}`;
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore += 1;
        scores.innerHTML =  `Rock beats scissors.<br/> Youre score: ${playerScore} Computer score: ${computerScore}`;
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore += 1;
        scores.innerHTML =  `Paper beats rock.<br/> Youre score: ${playerScore} Computer score: ${computerScore}`;
    }
    else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore += 1;
        scores.innerHTML =  `Scissors beats paper.<br/> Youre score: ${playerScore} Computer score: ${computerScore}`;
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore += 1;
        scores.innerHTML =  `Scissors beats paper.<br/> Youre score: ${playerScore} Computer score: ${computerScore}`;
    }
    else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore += 1;
        scores.innerHTML =  `Rock beats scissors.<br/> Youre score: ${playerScore} Computer score: ${computerScore}`;
    }

    game.appendChild(scores);

    win(playerScore, computerScore);
    
}

const endresult = document.createElement('div'); 
endresult.style.fontSize = '40px';
endresult.style.marginTop = '20px';
endresult.style.textDecorationLine = 'underline';


const win = (playerScore, computerScore) => {
    if(playerScore >= 5) {
       endresult.innerHTML = 'YOU WON';
       scores.innerHTML = `Wuhuu, great job!<br/> Youre score: ${playerScore} Computer score: ${computerScore}`;
      resetGame();
    } else if(computerScore >= 5) {
        endresult.innerHTML = 'YOU LOST';
        scores.innerHTML = `Try again<br/> Youre score: ${playerScore} Computer score: ${computerScore}`;
       resetGame(); 
    } else {
        endresult.innerHTML = '';
    }

    game.appendChild(endresult);
}


const resetGame = () => {
    if(win) {
        playerScore = 0;
        computerScore = 0;
    }
}

