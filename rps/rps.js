const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");

let humanChoice;

rock.addEventListener("click", () => {
    humanChoice = 1;
    console.log(answer());
});

paper.addEventListener("click", () => {
    humanChoice = 2;
    console.log(answer());
});

scissor.addEventListener("click", () => {
    humanChoice = 3;
    console.log(answer());
});

function getHumanChoice(){
    return humanChoice;
}

function getComChoice(){
    return Math.floor(Math.random()*3)+1;
}

function answer(){
    const com = getComChoice();
    const human = getHumanChoice();
    if(com === human){
        if (human === 1 || com ===1){return "Both choose rock"} 
        else if (human === 2 || com ===2){return "Both choose paper"}
        else {return "Both choose scissor"}}
    if (human === 1 && com === 3 || human === com + 1){
        if (human === 1){
        return "human win by rock"}
            else if (human === 2){
            return "human win by paper"}
                else {return "human win by scissor"}
        }
    else { 
        if (com === 1){
            return "bot win by rock"
        }
        else if (com === 2){
            return "bot win by paper"
        }
        else {return "bot win by scissor"}    
    }
}
console.log(answer())