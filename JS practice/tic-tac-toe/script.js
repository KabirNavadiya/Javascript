let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('#reset-game');

let playerTurn = 0;
let WinnerDecided = 0;
const winPatterns= [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

function Reset(){
    playerTurn = 0;
    enableBoxes();

}
function disableBoxes(){
    for(let box of boxes){
        box.disabled = true;
    }
}
function enableBoxes(){
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
function Draw(){
    let draw = false;
    for(let box of boxes){
        if(box.innerText != "" && WinnerDecided === 0){
            draw = true;
        }
        else{
            draw = false;
            break;
        }
    }
    return draw;
}
const checkWinner = () => {
    for(pattern of winPatterns){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
                disableBoxes();
                WinnerDecided = 1;
                setTimeout(function(){
                    alert(`Player ${pos1} Wins :)`)
                    Reset();
                },200);
                
            }
        }
    }
    if(Draw()){
        setTimeout(function(){
            alert("DRAW");
            Reset();
        },200);
    }


}
boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        console.log("box clicked");  
        if(playerTurn === 0){
            box.innerText = "O";
            playerTurn = 1;

        }
        else{
            box.innerText = "X";
            playerTurn = 0;
        }
        //disable button after each turn 
        box.disabled=true;
        // if(Draw()){
            
        // }
        checkWinner();
    })

}); 