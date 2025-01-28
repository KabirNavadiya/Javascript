// const body = document.body
// // body.append("Hello World !","Bye")
// // // body.appendChild("Hello World !")

// // creating elements
// // const div = document.createElement("div") 



// //modifying elements

// // method1
// // div.innerHTML = "Hello World ! (innerHTML)";
// // div.innerText = "hello World ! (innerText)";

// // method2
// // div.textContent= "hello World ! (textcontent)"




// // modifying html elements 

// //method 1

// //will not work....
// // div.textContent = "<strong>hello World ! 2</strong>" 

// // do this instead
// // div.innerHTML = "<strong> Hello World ! 2 </strong>"


// //method 2  (more secure way than .innerHTML)

// // const strong = document.createElement('strong')
// // strong.innerText = "Hello World ! 2"
// // body.append(strong)


// // body.append(div)



// // Remove html elements

// // const div = document.querySelector("div")
// // const spanHi = document.querySelector("#hi")
// // const spanBye = document.querySelector("#bye")

// //method 1
// // spanBye.remove()

// // method2
// // div.removeChild(spanHi)



// // Modifying elements attributes

// const div = document.querySelector("div")
// const spanHi = document.querySelector("#hi")
// const spanBye = document.querySelector("#bye")

// // spanHi.getAttribute("id")
// // spanHi.setAttribute("id","_hi")



// // modify data attribute
// // spanHi.dataset.newName = "hi"

// // spanHi.classList.add("new-class")
// // spanHi.classList.remove("hi1")
// // spanHi.classList.toggle("hi3")


// spanHi.style.color="red"
// spanHi.style.backgroundColor = "black"


// NUMBER GAME

let max = 20
//floor is used to round the number to nearest integer.
let secretNumber =Math.floor(Math.random() * max) + 1 ;
let maxChances = 20;
let chances = 20;
let highScore = 0;
function ResetFunc(){
    chances = 20;
    document.querySelector('.guess').value = "";
    document.querySelector('.number').textContent = "?";
    document.querySelector('.message').textContent = "Start guessing..."
    document.querySelector('.score').textContent = chances;

    document.querySelector('.content').style.backgroundColor = "black"

}

function checkChances(){
    if(chances > 1){
        return true;
    }
    else{
        return false;
    }
}
function CheckFunc(){
    const guess = Number(document.querySelector('.guess').value); 
    // no input
    if(!guess || guess > max){
        document.querySelector('.message').textContent = "Invalid Input";
    }
    // when player wins
    else if(guess === secretNumber){
        document.querySelector('.message').textContent = "Correct Guess !!";
        document.querySelector('.number').textContent = secretNumber;
        
        document.querySelector('.content').style.backgroundColor = '#60b347'
      
      
        // high score implementation.
        if(chances > highScore){
            highScore = maxChances-chances;
            document.querySelector('.highscore').textContent =highScore;
        }

    }
    else if(guess > secretNumber){
        if(checkChances()){
            chances--;
            document.querySelector('.score').textContent = chances;
            document.querySelector('.message').textContent = "Too High !"
        }else{
            document.querySelector('.message').textContent = " You Lose !! :(";
        }
    }
    else if(guess < secretNumber){
        if(checkChances()){
            chances--;
            document.querySelector('.score').textContent = chances;
            document.querySelector('.message').textContent = "Too Low !"
        }else{
            document.querySelector('.message').textContent = " You Lose !! :(";
        }
    }
}