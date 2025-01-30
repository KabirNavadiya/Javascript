const degButton =document.querySelector('.mode-btn');
const trigButtons = document.querySelectorAll('.btn[data-type="sin"], .btn[data-type="cos"], .btn[data-type="tan"]');
class Arithmetic {

    add(num1,num2){
        return num1 + num2;
    }
    subtract(num1,num2){
        return num1-num2;
    }
    multiply(num1,num2){
        return num1*num2;
    }
    divide(num1,num2){
        if(num2 === 0){
            return "Invalid Operation";
        }
        else{
           return num1 / num2;
        }
    }
    power(num1,num2){
        return Math.pow(num1,num2);
    }
    root(num1){
        return Math.sqrt(num1);
    }
    sqr(num1){
        return num1*num1;
    }
    power10(num){
        return Math.pow(10,num);
    }
    inverse(num){
        return 1/num;
    }

    factorial(num){
        if (num < 0) {
            return 'undefined';
        }
        let result = 1;
        for (let i = 1; i <= num; i++) {
            result *= i;
        }
        return result;
    }


    log(x) {
        if (x <= 0) {
            return 'undefined';
        }
        return Math.log10(x);
    }

    naturallog(x){
        if (x <= 0) {
            return 'undefined';
        }
        return Math.log(x);
    }


    // trigonometry.

    sin(num){
        return Math.sin(this.toRadians(num));
    }
    cos(num){
        return Math.cos(this.toRadians(num));
    }
    tan(num){
        return Math.tan(this.toRadians(num));
    }

    inversesin(num){
        return isDeg ? this.toDegrees(Math.asin(num)) : Math.asin(num);
    }
    inversecos(num){
        return isDeg ? this.toDegrees(Math.acos(num)) : Math.acos(num);
    }
    inversetan(num){
        return isDeg ? this.toDegrees(Math.atan(num)) : Math.atan(num);
    }


    toDegrees(radians){
        return radians * 180 / Math.PI;
    }

    toRadians(degrees) {
        return degrees * Math.PI / 180;
    }

}

class Calculator extends Arithmetic{


    constructor(){
        super();
        this.currentvalue = '';
        this.answer=0;
    }

    handleInput(value){
        this.currentvalue+=value;
        this.updateDisplay();
    }

    ChangeSign(){
        this.currentvalue *= -1;
        this.updateDisplay();
    }

    degTorad(){
        document.getElementById('')
    }

    updateDisplay(){
        document.getElementById('display').value = this.currentvalue;
    }

    Backspace(){
        this.currentvalue = this.currentvalue.slice(0,-1);
        this.updateDisplay();
    }

    clearScreen(){
        this.currentvalue = '';
        this.updateDisplay();
    }

    Calculate(currentvalue){

        let num=0;
        const advOP = ['√','^2','sin','cos','tan','^','10^','inv','!','log','ln','asin','acos','atan'];
        const op = advOP.find(element =>this.currentvalue.includes(element));


        if(advOP.includes(op)){
            num = currentvalue.match(/-?\d+/g);   
            console.log(num[0]);
            
        }

        switch(op){
            case '√':
                this.answer = this.root(num[0]);
                break;
            case '^2':
                this.answer=this.sqr(num[0]);
                break;
            case '^':
                this.answer=this.power(num[0],num[1]);
                break;
            case '10^':
                this.answer = this.power10(num[1]);
                break;
            case 'log':
                this.answer = this.log(num[0]);
                break;
            case 'sin':
                this.answer = this.sin(num[0]);
                break;
            case 'asin':
                this.answer = this.inversesin(num[0]);
                break;
            case 'cos':
                this.answer = this.cos(num[0]);
                break;
            case 'acos':
                this.answer = this.inversecos(num[0]);
                break;
            case 'tan':
                this.answer = this.tan(num[0]);
                break;
            case 'atan':
                this.answer = this.inversetan(num[0]);
                break;
            case 'inv':
                this.answer = this.inverse(num[0]);
                break;
            case '!':
                this.answer = this.factorial(num[0]);
                break;
            case 'ln':
                this.answer = this.naturallog(num[0]);
                break;
            default :
                try {
                    this.answer = eval(this.currentvalue);
                } catch (error) {
                    this.answer = "Error";
                }
                break;
        }
        this.currentvalue = this.answer.toString();
        this.updateDisplay();

     };

     SolveExpression(currentvalue){
        const operators = ['+', '*', '/'];
        let parts = currentvalue.split(/([+\*/])/)
        console.log(parts);
        
     }

}

const calculator = new Calculator();

let isDeg= true;
// console.log(isDeg);

degButton.addEventListener('click',function(){
    isDeg = !isDeg
    console.log(isDeg);
    if(isDeg){
        degButton.textContent = 'DEG';
        trigButtons.forEach((button)=>{
            if(button.dataset.type === 'asin'){
                button.dataset.type = 'sin';
                button.textContent = 'sin';
                button.dataset.value = 'sin';
                console.log(button.dataset.type );
                
            }
            else if(button.dataset.type === 'acos'){
                button.dataset.type = 'cos';
                button.textContent = 'cos';
                button.dataset.value = 'cos';
                console.log(button.dataset.type );

            }
            else if(button.dataset.type === 'atan'){
                button.dataset.type = 'tan';
                button.textContent = 'tan';
                button.dataset.value = 'tan';
                console.log(button.dataset.type );

            }
        });
    }
    else{
        degButton.textContent = 'RAD';
        trigButtons.forEach((button)=>{
            if(button.dataset.type === 'sin'){
                button.dataset.type = 'asin';
                button.textContent = 'sin⁻¹';
                button.dataset.value = 'asin';
                console.log(button.dataset.type);

            }
            else if(button.dataset.type === 'cos'){
                button.dataset.type = 'acos';
                button.textContent = 'cos⁻¹';
                button.dataset.value = 'acos';
                console.log(button.dataset.type);

            }
            else if(button.dataset.type === 'tan'){
                button.dataset.type = 'atan';
                button.textContent = 'tan⁻¹';
                button.dataset.value = 'atan';
                console.log(button.dataset.type);

            }
        })
    }

})

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener("click",function(){

        const value = this.getAttribute('data-value');
        const type = this.getAttribute('data-type');
    
        //input
        calculator.handleInput(value);
 
        switch(type){
            case 'equals':
                console.log(calculator.currentvalue);
                calculator.SolveExpression(calculator.currentvalue)
                calculator.Calculate(calculator.currentvalue);
                break;
            case 'del':
                calculator.Backspace();
                break;
            case 'clear':
                calculator.clearScreen();
                break;
            case 'changesign':
                calculator.ChangeSign();
        }
    })
});