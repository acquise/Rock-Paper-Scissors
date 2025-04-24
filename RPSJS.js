
let playerScore = 0
let compScore = 0

function playerEntry(pentry){
    return pentry;
}

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
        console.log("Player wins this round!");
        playerScore +=1
}
    else {
        console.log("Comp wins the round!")
        compScore +=1
    }
}

function playRound() {
    while (compScore < 3 && playerScore < 3) {
        console.log(roundResult("Rock",compEntry()))
}
console.log("The game is complete!")

}
console.log(playRound())
console.log (playerScore,compScore)
