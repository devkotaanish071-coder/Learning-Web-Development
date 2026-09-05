const score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    tie: 0
};

updateScore();

// document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Lose: ${score.losses}, Draw:${score.tie}`;


function playGame(playerMove){
    const computerMove = pickComputerMove();
    let result = '';

    if(playerMove === 'Scissor'){
            if(computerMove === 'Rock'){
            result = 'You Lose';
        }else if(computerMove ==='Paper'){
            result = 'You Win';
        }else if(computerMove === 'Scissor'){
            result = 'Tie';
        }
    } 
    else if(playerMove === 'Rock'){
        if(computerMove === 'Rock'){
            result = 'Tie';
        }else if(computerMove ==='Paper'){
            result = 'You Lose';
        }else if(computerMove === 'Scissor'){
            result = 'You Win';
        }
    } 
    else if(playerMove === 'Paper'){
        if(computerMove === 'Rock'){
            result = 'You Win';
        }else if(computerMove ==='Paper'){
            result = 'Tie';
        }else if(computerMove === 'Scissor'){
            result = 'You Lose';
        }
    }

    if(result === 'You Win'){
        score.wins++;
    } else if(result === 'You Lose'){
        score.losses++;
    } else if(result === 'Tie'){
        score.tie++;
    }
    
    localStorage.setItem('score', JSON.stringify(score));

    updateScore();

    document.querySelector(".js-moves").innerHTML = 
    `You 
    <img src = "images/${playerMove}.png" class = "move-icon">&nbsp;&nbsp;&nbsp;
    <img src = "images/${computerMove}.png" class = "move-icon">
    Computer`;

    document.querySelector('.js-result').innerHTML = result;
    
}

function updateScore(){
    document.querySelector('.js-score').innerHTML = 
    `Wins: ${score.wins}<br>
    Lose: ${score.losses}<br>
    Draw:${score.tie}`;
}


function pickComputerMove(){
    const randomNumber = Math.floor(Math.random()*3);
    let computerMove = ''; 
    if(randomNumber == 0){
        computerMove = 'Rock';
    }else if(randomNumber == 1){
        computerMove = 'Paper';
    }else if(randomNumber == 2){
        computerMove = 'Scissor';
    }

    return computerMove;
}