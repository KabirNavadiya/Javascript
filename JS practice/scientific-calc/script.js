const degButton =document.querySelector('.mode-btn');
const trigButtons = document.querySelectorAll('.btn[data-type="sin"], .btn[data-type="cos"], .btn[data-type="tan"]');


// section where arithmatic operations are handled //
class Arithmetic {

    power(num1,num2){
        return Math.pow(num1,num2);
    }
    root(num1){
        return (Math.sqrt(num1)).toFixed(4);
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
        return (Math.log10(x)).toFixed(4);
    }

    naturallog(x){
        if (x <= 0) {
            return 'undefined';
        }
        return (Math.log(x)).toFixed(4);
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



// section where calculator clicks are handled with functions //

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


    Calculate(){

        let Str='';
        if(this.currentvalue.includes('^') || this.currentvalue.includes('10^')  ){
            Str=this.XPowerY(this.currentvalue,'^');
            let num=this.ExtractLastTwoDigits(Str);
            console.log(num);
            let dummy = this.power(parseFloat(num[0]),parseFloat(num[1]));
            this.currentvalue=this.currentvalue.replace(Str,dummy.toString());
        }

        try{
            this.answer = eval(this.currentvalue);
        }
        catch(error){
            this.answer = "Error";
        }

        this.currentvalue = this.answer.toString();
        this.updateDisplay();
    }

    XPowerY(str,char){
        let index = str.indexOf(char);
        if (index === -1) {
            return null;
        }
        let leftNumMatch = str.slice(0, index).match(/-?\d+(\.\d+)?$/);  // Match number before the operator
        let rightNumMatch = str.slice(index + 1).match(/^\d+(\.\d+)?/);  // Match number after the operator

        let left = leftNumMatch ? leftNumMatch[0] : '';  
        let right = rightNumMatch ? rightNumMatch[0] : '';  
        
        return left + char + right;
    }

    ExtractLastDigit(){
        let match = this.currentvalue.match(/(-?\d*\.?\d+)$/); 
        return match[0];
    }
    ExtractLastTwoDigits(Str) {
        let match = Str.match(/(-?\d*\.?\d+)(?:\D+(-?\d*\.?\d+))?$/);
        return match ? [parseFloat(match[1]), parseFloat(match[2] || 0)] : null; 
    }
    ReplaceLastDigit(str){
        this.currentvalue = this.currentvalue.replace(/(-?\d*\.?\d+)$/,str.toString());
    }

    NumberSquare(){
        if(this.currentvalue===''){
            return '';
        }
        let num = this.ExtractLastDigit();
        let dummy = this.sqr(parseFloat(num));
        this.ReplaceLastDigit(dummy);
        this.updateDisplay();
    }
    NumberInverse(){
        if(this.currentvalue===''){
            return '';
        }
        let num = this.ExtractLastDigit();
        let dummy = this.inverse(parseFloat(num));
        this.ReplaceLastDigit(dummy);
        this.updateDisplay();
    }
    NumberRoot(){
        if(this.currentvalue===''){
            return '';
        }
        let num = this.ExtractLastDigit();
        let dummy = this.root(parseFloat(num));
        this.ReplaceLastDigit(dummy);
        this.updateDisplay();
    }
    NumberLog(){
        if(this.currentvalue===''){
            return '';
        }
        let num = this.ExtractLastDigit();
        let dummy = this.log(parseFloat(num));
        this.ReplaceLastDigit(dummy);
        this.updateDisplay();
    }
    NumberNaturalLog(){
        if(this.currentvalue===''){
            return '';
        }
        let num = this.ExtractLastDigit();
        let dummy = this.naturallog(parseFloat(num));
        this.ReplaceLastDigit(dummy);
        this.updateDisplay();
    }
    NumberFact(){
        if(this.currentvalue===''){
            return '';
        }
        let num = this.ExtractLastDigit();
        let dummy = this.factorial(parseFloat(num));
        this.ReplaceLastDigit(dummy);
        this.updateDisplay();
    }
    NumberSin(){
        if(this.currentvalue===''){
            return '';
        }
        let num = this.ExtractLastDigit();
        let dummy = this.sin(parseFloat(num));
        this.ReplaceLastDigit(dummy);
        this.updateDisplay();
    }
    NumberCos(){
        if(this.currentvalue===''){
            return '';
        }
        let num = this.ExtractLastDigit();
        let dummy = this.cos(parseFloat(num));
        this.ReplaceLastDigit(dummy);
        this.updateDisplay();
    }
    NumberTan(){
        if(this.currentvalue===''){
            return '';
        }
        let num = this.ExtractLastDigit();
        let dummy = this.tan(parseFloat(num));
        this.ReplaceLastDigit(dummy);
        this.updateDisplay();
    }
    NumberAsin(){
        if(this.currentvalue===''){
            return '';
        }
        let num = this.ExtractLastDigit();
        let dummy = this.Asin(parseFloat(num));
        this.ReplaceLastDigit(Math.round(this.toDegrees(dummy)));
        this.updateDisplay();
    }
    NumberAcos(){
        if(this.currentvalue===''){
            return '';
        }
        let num = this.ExtractLastDigit();
        let dummy = this.Acos(parseFloat(num));
        this.ReplaceLastDigit(Math.round(this.toDegrees(dummy)));
        this.updateDisplay();
    }
    NumberAtan(){
        if(this.currentvalue===''){
            return '';
        }
        let num = this.ExtractLastDigit();
        let dummy = this.Atan(parseFloat(num));
        this.ReplaceLastDigit(Math.round(this.toDegrees(dummy)));
        this.updateDisplay();
    }


}


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