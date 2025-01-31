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

    Asin(num){
        return Math.asin(num);
        
    }
    Acos(num){
        return Math.acos(num);
    }
    Atan(num){
        return Math.atan(num);
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
        this.memory = 0;
    }

    handleInput(value){
        this.currentvalue+=value;
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


    MemoryStore(){
        if(this.currentvalue === ''){
            this.memory = 0;
        }
        else{
            this.memory = parseFloat(this.currentvalue);
            
        }
    }

    MemoryRecall(){
        this.currentvalue = this.memory.toString();
        this.updateDisplay()
    }
    MemoryAdd(){
        if(this.currentvalue !== ''){
            this.currentvalue = parseFloat(this.currentvalue);
            this.currentvalue += parseFloat(this.memory);
        }
        else{
            this.memory += 0;
        }
        this.currentvalue = this.currentvalue.toString();
        this.updateDisplay()
    }
    MemorySubtract(){
        if(this.currentvalue !== ''){
            this.currentvalue = parseFloat(this.currentvalue);
            this.currentvalue -= parseFloat(this.memory);
        }
        else{
            this.memory += 0;
        }
        this.currentvalue = this.currentvalue.toString();
        this.updateDisplay()
    }

    MemoryClear(){
        this.memory = 0;
    }




    Calculate(currentvalue){

        let num=0;
        const advOP = ['asin','acos','atan','√','^2','sin','cos','tan','^','10^','inv','!','log','ln'];

        const op = advOP.find(element =>this.currentvalue.includes(element));
        // console.log(op);


        if(advOP.includes(op)){
            num = currentvalue.match(/-?\d*\.?\d+/g);
            // console.log(num);
            
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
                this.answer = Math.round(this.toDegrees(this.Asin(num[0])));
                this.answer += `°`;
                // console.log(this.answer);
                break;
            case 'cos':
                this.answer = this.cos(num[0]);
                break;
            case 'acos':
                this.answer =Math.round(this.toDegrees(this.Acos(num[0])));
                this.answer += `°`;
                break;
            case 'tan':
                this.answer = this.tan(num[0]);
                break;
            case 'atan':
                this.answer =Math.round(this.toDegrees(this.Atan(num[0])));
                this.answer += `°`;
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

}

const calculator = new Calculator();

let isDeg= true;


degButton.addEventListener('click',function(){
    isDeg = !isDeg
    // console.log(isDeg);
    if(isDeg){
        degButton.textContent = 'DEG';
        trigButtons.forEach((button)=>{
            if(button.dataset.type === 'asin'){
                button.dataset.type = 'sin';
                button.textContent = 'sin';
                button.dataset.value = 'sin';
                // console.log(button.dataset.type );
                
            }
            else if(button.dataset.type === 'acos'){
                button.dataset.type = 'cos';
                button.textContent = 'cos';
                button.dataset.value = 'cos';
                // console.log(button.dataset.type );

            }
            else if(button.dataset.type === 'atan'){
                button.dataset.type = 'tan';
                button.textContent = 'tan';
                button.dataset.value = 'tan';
                // console.log(button.dataset.type );

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
                // console.log(button.dataset.type);

            }
            else if(button.dataset.type === 'cos'){
                button.dataset.type = 'acos';
                button.textContent = 'cos⁻¹';
                button.dataset.value = 'acos';
                // console.log(button.dataset.type);

            }
            else if(button.dataset.type === 'tan'){
                button.dataset.type = 'atan';
                button.textContent = 'tan⁻¹';
                button.dataset.value = 'atan';
                // console.log(button.dataset.type);

            }
        })
    }

})


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

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener("click",function(){

        const value = this.getAttribute('data-value');
        const type = this.getAttribute('data-type');
    
        //input
        calculator.handleInput(value);
 
        switch(type){
            case 'equals':
                calculator.Calculate(calculator.currentvalue);
                break;
            case 'del':
                calculator.Backspace();
                break;
            case 'clear':
                calculator.clearScreen();
                break;
        }
    })
});