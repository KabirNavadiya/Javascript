
class Calculator{

    constructor(){
        this.currentvalue = '';
        // this.answer=0;
    }

    //basic operations

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


    handleInput(value){
        this.currentvalue+=value;
        this.updateDisplay();
    }


    updateDisplay(){
        document.getElementById('display').value = this.currentvalue;
    }

    Backspace(){
        this.currentvalue = this.currentvalue.slice(0,-1);
        console.log(this.currentvalue);
        this.updateDisplay();
    }

    clearScreen(){
        this.currentvalue = '';
        this.updateDisplay();
    }

    Calculate(){
        try{
            this.answer = eval(this.currentvalue);
            this.currentvalue = this.answer.toString();
            this.updateDisplay();
        }
        catch(err){
            // this.handleError(err)            
        }

    //     const tokens = currentvalue.match(/(\d+\.?\d*|\+|\-|\*|\/|\^|\(|\)|sin|cos|tan|sqrt|log|ln)/g);
    //     const outputQueue = [];
    //     const operatorStack=[];
    //     const operatorPrecedence = {
    //         '+': 1, '-': 1,
    //         '*': 2, '/': 2,
    //         '^': 3,
    //         'sin': 4, 'cos': 4, 'tan': 4, 'sqrt': 4, 'log': 4, 'ln': 4
    //     };

    //     const applyOperator = ()=>{
    //         const op = operatorStack.pop();
    //         const b = outputQueue.pop();
    //         const a =outputQueue.pop();
    //         let result;

    //         switch(op){
    //             case '+' :
    //                 result = this.add(a,b);
    //                 break;
    //             case '-':
    //                 result = this.subtract(a,b);
    //                 break;
    //             case '*':
    //                 result = this.multiply(a,b);
    //                 break;
    //             case '/':
    //                 result = this.divide(a,b);
    //                 break;
    //             case '^':
    //                 result = this.power(a,b);
    //                 break;
    //             case 'sqrt':
    //                 result = this.root(b);
    //                 break;
    //         }
    //         outputQueue.push(result);
    //     };
    //     for (let token of tokens) {
    //         if (/\d+\.?\d*/.test(token)) {
    //             outputQueue.push(parseFloat(token));
    //         } else if (['+', '-', '*', '/', '^'].includes(token)) {
    //             while (operatorStack.length > 0 && operatorPrecedence[token] <= operatorPrecedence[operatorStack[operatorStack.length - 1]]) {
    //                 applyOperator();
    //             }
    //             operatorStack.push(token);
    //         }else if (['sin', 'cos', 'tan', 'sqrt', 'log', 'ln'].includes(token)) {
    //             operatorStack.push(token);
    //         }
    //         else if (token === '(') {
    //             operatorStack.push(token);
    //         } else if (token === ')') {
    //             while (operatorStack[operatorStack.length - 1] !== '(') {
    //                 applyOperator();
    //             }
    //             operatorStack.pop();
    //         }

    //     }
    
    //     while (operatorStack.length > 0) {
    //         applyOperator();
    //     }
    
    //     this.currentvalue=outputQueue.pop();
    //     this.updateDisplay();
     };

    
}

const calculator = new Calculator();

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener("click",function(){

        const value = this.getAttribute('data-value');
        const type = this.getAttribute('data-type');
    

        //input

    //    if (['number0', 'number1', 'number2', 'number3', 'number4', 'number5', 'number6', 'number7', 'number8', 'number9', 'decimal', 'addition', 'subtract', 'multiplication', 'divide', 'OpenParenthesis', 'CloseParenthesis'].includes(type)) {
            calculator.handleInput(value);
    //    }
        
        //calculate
        if(type === 'equals'){
            // console.log(calculator.currentvalue);
            calculator.Calculate(calculator.currentvalue);
        }
        
        
        //delete
        if(type ==='del'){
            calculator.Backspace();
        }

        // clear screen 
        if(type ==='clear'){
            calculator.clearScreen();
        }
    })
});