/* Basketball RPS */


/* Set up Global variables for future use*/

// const shotClock = 24;
let playerScore = 0;
let displayPlayerScore = document.getElementById('player-score');
let opponentScore = 0;
let displayOpponentScore = document.getElementById('opponent-score');

let moveSet = ["Shoot", "Pass", "Block"] 
let choiceGenerator = Math.floor(Math.random()*3);
let opponentChoice = moveSet[choiceGenerator];



// Compare player decision and oppenent decision
// Score conditions
function game(playerChoice){
    if(playerScore <= 16 || opponentScore <= 16){ 
        if(playerChoice === "Shoot" && opponentChoice === "Pass" || playerChoice === "Pass" && opponentChoice === "Block" || playerChoice === "Block" && opponentChoice === "Shoot"){
            console.log("Win!")
            let win = document.getElementById('playerClick')
            win.innerText = `Well done! You chose ${playerChoice} and opponent chose ${opponentChoice}`
            playerScore++;
            displayPlayerScore.innerHTML = `${playerScore}`
        } else if(opponentChoice === "Shoot" && playerChoice === "Pass" || opponentChoice === "Pass" && playerChoice === "Block" || opponentChoice === "Block" && playerChoice === "Shoot"){
            let lose = document.getElementById('playerClick')
            lose.innerText = `Touch luck! You chose ${playerChoice} and opponent chose ${opponentChoice}`
            opponentScore++;
            displayOpponentScore.innerHTML = `${opponentScore}`
        } else{
            let draw = document.getElementById('playerClick')
            draw.innerText = `You chose ${playerChoice} and your opponent chose ${opponentChoice}! Its a draw!`
        }
        
    }
    if(playerScore == 16){
        alert("YOU WIN!!")
    } else if(opponentScore == 16){
        alert("YOU LOSE")
    }
    
}


