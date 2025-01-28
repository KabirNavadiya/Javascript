const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const curr0El = document.getElementById('current--0');
const curr1El = document.getElementById('current--1');
const btnRoll = document.getElementById('btn--roll');
const btnHold = document.getElementById('btn--hold');
const diceEl = document.querySelector('.dice');

//starting conditions

score0El.textContent=0;
score1El.textContent=0;
diceEl.classList.add('hidden')

let scores = [0,0];
let currScore = 0;
let activeP=0;
let playing = true;

function switchPlayer(){
        
    const dice = Math.trunc(Math.random() *6 ) +1;
    diceEl.classList.add('hidden');
    diceEl.src=`/html-dom/dice-game/dice-${dice}.png`

    document.getElementById(`current--${activeP}`).textContent = "0";
    currScore=0; 
    activeP = activeP === 0 ? 1 : 0;

    //toggle can add class if not there and will remove if class present.
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');

}

function handleRollDice(){

    if (playing) {

    const dice = Math.trunc(Math.random() *6 ) +1;
    diceEl.classList.remove('hidden');
    diceEl.src=`/html-dom/dice-game/dice-${dice}.png`

    if (dice !== 1) {
        currScore += dice;
        document.getElementById(`current--${activeP}`).textContent = currScore;

    }
    else{
            switchPlayer();
        }
    }
}



function handleHold(){

    if (playing) {

        scores[activeP] += currScore
        document.getElementById(`score--${activeP}`).textContent = scores[activeP];

        if(scores[activeP] >= 20){
            document.querySelector(`.player--${activeP}`).classList.add('player--winner');
            document.querySelector(`.player--${activeP}`).classList.remove('.player--active');
            playing=false;

        }else{
            switchPlayer();
        }  
    } 
}

function handleNewGame(){
    playing = true;
    scores = [0,0];
    currScore = 0;
    activeP=0;

    score0El.textContent=scores[0];
    score1El.textContent=scores[1];
    curr0El.textContent=currScore;
    curr1El.textContent=currScore;

    diceEl.classList.add('hidden');
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
}