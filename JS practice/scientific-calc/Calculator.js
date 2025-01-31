

class Calculator{
    constructor(){
        this.currentvalue = '';
        this.answer = 0;
        this.memory = 0;
    };
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

// handle buttons

Calculator.prototype.handleInput = function(value){
    this.currentvalue+=value;
    this.updateDisplay();
}

Calculator.prototype.degTorad = function(){
    document.getElementById('')
}
Calculator.prototype.updateDisplay = function(){
    document.getElementById('display').value = this.currentvalue;
}

Calculator.prototype.Backspace = function(){
    this.currentvalue = this.currentvalue.slice(0,-1);
    this.updateDisplay();
}
Calculator.prototype.clearScreen = function(){
    this.currentvalue = '';
    this.updateDisplay();
}


// memory operations .

Calculator.prototype.MemoryStore = function(){
    if(this.currentvalue === ''){
        this.memory = 0;
    }
    else{
        this.memory = parseFloat(this.currentvalue);
        
    }
}

Calculator.prototype.MemoryRecall = function(){
    this.currentvalue = this.memory.toString();
    this.updateDisplay()
}

Calculator.prototype.MemoryAdd = function(){
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

Calculator.prototype.MemorySubtract = function(){
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

Calculator.prototype.MemoryClear = function(){
    this.memory = 0;
}

Calculator.prototype.Calculate = function(){
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

Calculator.prototype.XPowerY = function(str,char){
    let index = str.indexOf(char);
    if (index === -1) {
        return null;
    }
    let leftNumMatch = str.slice(0, index).match(/-?\d+(\.\d+)?$/);  
    let rightNumMatch = str.slice(index + 1).match(/^\d+(\.\d+)?/); 

    let left = leftNumMatch ? leftNumMatch[0] : '';  
    let right = rightNumMatch ? rightNumMatch[0] : '';  
    
    return left + char + right;
}

Calculator.prototype.ExtractLastDigit = function(){
    let match = this.currentvalue.match(/(-?\d*\.?\d+)$/); 
    return match[0];
}

Calculator.prototype.ExtractLastTwoDigits = function(Str){
    let match = Str.match(/(-?\d*\.?\d+)(?:\D+(-?\d*\.?\d+))?$/);
    return match ? [parseFloat(match[1]), parseFloat(match[2] || 0)] : null; 

}
Calculator.prototype.ReplaceLastDigit = function(str){
    this.currentvalue = this.currentvalue.replace(/(-?\d*\.?\d+)$/,str.toString());


}

Calculator.prototype.NumberSquare = function(){
    if(this.currentvalue===''){
        return '';
    }
    let num = this.ExtractLastDigit();
    let dummy = this.sqr(parseFloat(num));
    this.ReplaceLastDigit(dummy);
    this.updateDisplay();
}
Calculator.prototype.NumberInverse = function(){
    if(this.currentvalue===''){
        return '';
    }
    let num = this.ExtractLastDigit();
    let dummy = this.inverse(parseFloat(num));
    this.ReplaceLastDigit(dummy);
    this.updateDisplay();
}

Calculator.prototype.NumberRoot = function(){
    if(this.currentvalue===''){
        return '';
    }
    let num = this.ExtractLastDigit();
    let dummy = this.root(parseFloat(num));
    this.ReplaceLastDigit(dummy);
    this.updateDisplay();
}

Calculator.prototype.NumberLog = function(){
    if(this.currentvalue===''){
        return '';
    }
    let num = this.ExtractLastDigit();
    let dummy = this.log(parseFloat(num));
    this.ReplaceLastDigit(dummy);
    this.updateDisplay();
}

Calculator.prototype.NumberNaturalLog = function(){
    if(this.currentvalue===''){
        return '';
    }
    let num = this.ExtractLastDigit();
    let dummy = this.naturallog(parseFloat(num));
    this.ReplaceLastDigit(dummy);
    this.updateDisplay();
}

Calculator.prototype.NumberFact = function(){
    if(this.currentvalue===''){
        return '';
    }
    let num = this.ExtractLastDigit();
    let dummy = this.factorial(parseFloat(num));
    this.ReplaceLastDigit(dummy);
    this.updateDisplay();
}

Calculator.prototype.NumberSin = function(){
    if(this.currentvalue===''){
        return '';
    }
    let num = this.ExtractLastDigit();
    let dummy = this.sin(parseFloat(num));
    this.ReplaceLastDigit(dummy);
    this.updateDisplay();
}

Calculator.prototype.NumberCos = function(){
    if(this.currentvalue===''){
        return '';
    }
    let num = this.ExtractLastDigit();
    let dummy = this.cos(parseFloat(num));
    this.ReplaceLastDigit(dummy);
    this.updateDisplay();
}

Calculator.prototype.NumberTan = function(){
    if(this.currentvalue===''){
        return '';
    }
    let num = this.ExtractLastDigit();
    let dummy = this.tan(parseFloat(num));
    this.ReplaceLastDigit(dummy);
    this.updateDisplay();
}

Calculator.prototype.NumberAsin = function(){
    if(this.currentvalue===''){
        return '';
    }
    let num = this.ExtractLastDigit();
    let dummy = this.Asin(parseFloat(num));
    this.ReplaceLastDigit(Math.round(this.toDegrees(dummy)));
    this.updateDisplay();
}

Calculator.prototype.NumberAcos = function(){
    if(this.currentvalue===''){
        return '';
    }
    let num = this.ExtractLastDigit();
    let dummy = this.Acos(parseFloat(num));
    this.ReplaceLastDigit(Math.round(this.toDegrees(dummy)));
    this.updateDisplay();
}

Calculator.prototype.NumberAtan = function(){
    if(this.currentvalue===''){
        return '';
    }
    let num = this.ExtractLastDigit();
    let dummy = this.Atan(parseFloat(num));
    this.ReplaceLastDigit(Math.round(this.toDegrees(dummy)));
    this.updateDisplay();
}

export default Calculator;
