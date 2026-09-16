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
    if(com === human){return "draw";}
    else if (human === 1 && com === 3 || human === com + 1){
            if (human === 1){console.log("rock")
                
            }
        return "human win"
    }
    else { return "human lost"}
}
console.log(answer())