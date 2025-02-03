
import  Calculator from './Calculator.js';

const degButton =document.querySelector('.mode-btn');
const trigButtons = document.querySelectorAll('.btn[data-type="sin"], .btn[data-type="cos"], .btn[data-type="tan"]');


// object of claculator created //
const calculator = new Calculator();
let isDeg= true;

// functionality to change deg->rad and rad->deg

degButton.addEventListener('click',function(){
    isDeg = !isDeg
    if(isDeg){
        degButton.textContent = 'DEG';
        trigButtons.forEach((button)=>{
            if(button.dataset.type === 'asin'){
                button.dataset.type = 'sin';
                button.textContent = 'sin()';
                
            }
            else if(button.dataset.type === 'acos'){
                button.dataset.type = 'cos';
                button.textContent = 'cos()';

            }
            else if(button.dataset.type === 'atan'){
                button.dataset.type = 'tan';
                button.textContent = 'tan()';

            }
        });
    }
    else{
        degButton.textContent = 'RAD';
        trigButtons.forEach((button)=>{
            if(button.dataset.type === 'sin'){
                button.dataset.type = 'asin';
                button.textContent = 'sin⁻¹';

            }
            else if(button.dataset.type === 'cos'){
                button.dataset.type = 'acos';
                button.textContent = 'cos⁻¹';

            }
            else if(button.dataset.type === 'tan'){
                button.dataset.type = 'atan';
                button.textContent = 'tan⁻¹';


            }
        })
    }

})

// Section to handle memory //

document.querySelectorAll('.mem-btn').forEach(button =>{
    button.addEventListener("click",function(){

        const type = this.getAttribute('data-type');
        // console.log(type);


        switch(type){

            case 'MemoryStore':
                calculator.MemoryStore();
                break;
            case 'MemoryRecall':
                calculator.MemoryRecall();
                break;
            case 'MemoryAdd':
                calculator.MemoryAdd();
                break;
            case 'MemorySub':
                calculator.MemorySubtract();
                break;
            case 'MemoryClear':
                calculator.MemoryClear();
                break;
        }
        
    })
})

const toggle = document.querySelector('.toggle');
const container = document.querySelector('.calculator');
const icon = document.querySelector('.bi')
toggle.addEventListener("click",()=>{
    // console.log("Toggle clicked");

    container.classList.toggle('calculator-dark');
    document.getElementById('display').style.color = "white";
    icon.classList.toggle('bi-moon-fill');
    icon.classList.toggle('bi-brightness-high-fill');
    document.querySelectorAll('.btn').forEach(button => {
        button.classList.toggle('btn-dark');
    })

    document.querySelectorAll('.mode-btn').forEach(button =>{
        button.classList.toggle('btn-dark');
    })
    document.querySelectorAll('.mem-btn').forEach(button =>{
        button.classList.toggle('btn-dark');
    })
    
})

// MAIN //

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener("click",function(){

        const value = this.getAttribute('data-value');
        const type = this.getAttribute('data-type');
    
        //input
        calculator.handleInput(value);
 
        switch(type){
            case 'equals':
                calculator.Calculate();
                break;
            case 'del':
                calculator.Backspace();
                break;
            case 'clear':
                calculator.clearScreen();
                break;
            case 'NumberSquare':
                calculator.NumberSquare();
                break;
            case 'inverse':
                calculator.NumberInverse();
                break;
            case 'sin':
                calculator.NumberSin();
                break;     
            case 'cos':
                calculator.NumberCos();
                break; 
            case 'tan':
                calculator.NumberTan();
                break;   
            case 'root':
                calculator.NumberRoot();
                break;
            case 'factorial':
                calculator.NumberFact();
                break;
            case 'log':
                calculator.NumberLog();
                break;
            case 'Naturallog':
                calculator.NumberNaturalLog();
                break;
            case 'asin':
                calculator.NumberAsin();
                break;
            case 'acos':
                calculator.NumberAcos();
                break;
            case 'atan':
                calculator.NumberAtan();
                break;
        }
    })
});