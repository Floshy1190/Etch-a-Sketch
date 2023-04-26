document.addEventListener("DOMContentLoaded", function(){
    createSize(16);
    console.log("hello")
})

function createBoard(size){
    let board = document.querySelector(".board");

    board.style.gridTemplateColumns = 'repeat(${size}, 1fr)';
    board.style.gridTemplateRows = 'repeat(${size}, 1fr)';

    let numDivs = size * size;

    for(let i = 0; i < numDivs; i++){
        let div = document.createElement("div");
        div.addEventListener("mouseover", colorDiv)
        board.insertAdjacentElement("beforeend", div);
    }
}

function colorDiv(){
    if(color == "random"){
        this.style.backgroundColor = 'hsl(${Math.random() = 360}, 100%, 50%)'
    }
    else{
        this.style.backgroundColor = 'black'
    }
}
function setColor(colorChoice){
    color = colorChoice;
}