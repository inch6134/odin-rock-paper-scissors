function getComputerChoice(remainder) {
    switch(remainder) {
        case 0:
            return "Rock";
        
        case 1:
            return "Paper";

        case 2:
            return "Scissors";
     }
}

function calcRemainder() {
    return Math.floor(Math.random() * 100) % 3;
}

console.log(calcRemainder());
console.log(getComputerChoice(calcRemainder()));