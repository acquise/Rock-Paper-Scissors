
let playerScore = 0
let compScore = 0
let winner


pentry = prompt("Enter your choice: Rock, Paper or Scissors!")


function compEntry(centry){
    centryOptions = ["Rock", "Paper", "Scissors"]
    randomChoice = Math.floor(Math.random()* 3);
    return centryOptions[randomChoice];
}

function roundResult(playerEntry,compEntry){
    if (playerEntry === compEntry){
        console.log("This round is a tie!")
    }
    else if (playerEntry === "Rock" && compEntry === "Scissors" || playerEntry === "Paper" && compEntry === "Rock" || playerEntry === "Scissors" && compEntry === "Paper"){
        console.log("Player wins this round..." + playerEntry + " beats " + compEntry);
        playerScore ++
}
    else {
        console.log("Comp wins this round!...." + compEntry + " beats " + playerEntry);
        compScore ++    
    }
}

function playRound() {
    let roundScore = 0
    while (compScore < 3 && playerScore < 3) {
        console.log(roundResult(pentry,compEntry()))
        roundScore +=1
}

if (compScore === 3){
    winner = "Computer";}
    else {
            winner = "Player"
    }
console.log("The game is complete! you played " + roundScore + " rounds total and " + winner + " won!")

}
console.log(playRound())
console.log (playerScore,compScore)
