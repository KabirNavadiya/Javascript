// let js = "amazing";

// console.log(40+60-20);

// console.log(js);
// let firstName = "kabir";
// console.log(firstName);


// // how to define variables . 
// let jonas_maltida = "JM";
// let $function =26;
// let person = "kabir";
// let PI = 3.1415;


// //booolean datatype

// let javaScriptisFun = true;
// console.log(javaScriptisFun);

// // typeof 

// console.log(typeof true);
// console.log("type of javascriptisfun before:",typeof javaScriptisFun);
// console.log(typeof 26);

// //dyynamic typing

// javaScriptisFun = "yes";
// console.log("type of javascriptisfun after:",typeof javaScriptisFun);


// //let (mutable)
// let age=30;
// console.log(age);

// age = 36;
// console.log(age);


// console.log("let-block ex :");
// {
//     let job = "programmer";
//     console.log(job);
    

// }
// console.log("outside block",job);
// job = "technician";
// console.log(job);


// //const (immutable)
// const birthYear = 2003;
// console.log(birthYear);

// //can't change. 
// // birthYear = 2002;
// // console.log(birthYear); 

// // no empty consts
// // const job; 


// // var
// console.log("car-block ex :");

// {
//     var job = "programmer";

// }
// console.log(job);
// job = "technician";
// console.log(job);



// // math operators 

// const currYear = 2024;
// const ageKabir = currYear - 2003;
// const ageUtsav = currYear - 2001;

// console.log(ageKabir, ageUtsav);

// console.log(ageKabir * 2 , ageUtsav / 2, 2**3);

// const firstName = "kabir";
// const lastName = "navadiya";

// console.log("fullname : ",firstName+" "+lastName);

// // assignment operators
// let x = 10 + 5;
// x+=10;
// x*=4;
// x++;
// x--;
// x--;
// console.log(x);

// //comparison operators

// console.log(ageKabir > ageUtsav); // >, < , >=, <= 


// //challenge
// let massMark = 78;
// let massJohn = 92;
// let heightMark = 1.69;
// let heightJohn = 1.95;

// BMIMark = massMark/(heightMark * heightMark);
// BMIJohn = massJohn/(heightJohn * heightJohn);

// console.log(BMIMark,BMIJohn);

// const markHigherBMI = BMIMark > BMIJohn;
// console.log(markHigherBMI);


// // string

// const firstName = "Kabir";
// const job = "Trainee Engineer";
// const birthYear = 2003;
// const year = 2024;
// const kabir = "I'm " + firstName + ', a ' + (year-birthYear) + ' years old ' + job + '!';
// console.log(kabir);

// //tempelate literals

// const kabirnew = `I'm ${firstName}, a ${(year-birthYear)} years old ${job}!`;
// console.log(kabirnew);


// //conditional 

// const age =19;

// if(age>=18){
//     console.log("Eligible for driver's license");
    
// }
// else{
//     console.log("Not eligible for driver's license");
    
// }

// //challenge#2
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / (heightMark * heightMark);
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);

// if(BMIMark > BMIJohn){
//     console.log("Mark's BMI is higher than John's!");
// }
// else{
//     console.log("John's BMI is higher than Mark's!");
// }
// if(BMIMark > BMIJohn){
//     console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
// }
// else{
//     console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
// }


//conversion and coercion
// const inputyear = '2003';
// const curryear=2024;
// const age = curryear - Number(inputyear);
// console.log(age);

// console.log( typeof String(21),String(21));

// //type coercion
// console.log("below all are strings");

// console.log('I am ' + 21 + ' years old ');

// console.log('23'-'10'-3);
// console.log('2' * '3');
// console.log('10' / '2');



// 5 falsy values: 0, '', undefined, null,NaN
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('kabir'));
// console.log(Boolean({}));
// console.log(Boolean(''));

// const money=0;
// if(money){
//     console.log("Dont' spend it all !");
// }else{
//     console.log("you should get a job !");
    
// }

// let height; // let height =156;
// if(height){
//     console.log("YAY ! Height is defined");
// }else{
//     console.log("Height is undefined !");
    
// }



// Equality operators == & ===

// let a = 1;
// let b = '1';
// if (a == b) {
//     console.log("a==b true");
    
// } else {
//     console.log("a==b false");
    
// }

// if (a===b) {
//     console.log("a===b true");
    
// } else {
//     console.log("a===b false");
    
// }


// //prompt

// const favourite = prompt("enter your favourite number !");
// console.log('favourite :',favourite);



// //switch statement

// const day =prompt("Enter a day");
// switch (day) {
//     case 'monday':
//         console.log("Plan course structure");
//         console.log("Go to coding meetup");
//         break;
//     case 'tuesday':
//         console.log("Prepare theory videos");
//         break
//     case 'wednesday':
//     case 'thursday':
//         console.log("write code examples");
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log("write code examples");
//         break;
//     default:
//         console.log("Not a valid day!");
//         break;
// }


//ternary operator

const age = 21;
age>=18 ? console.log("I like to drink wine"): console.log("I like to drink water");

const drink = age>=21 ? 'wine' : 'water'
console.log(drink);


// challenge tip calculator withou if...else 

const bill = 275;

/* Write your code below. Good luck! 🙂 */

const tip = (bill >=50 && bill <=300) ? bill*0.15 : bill * 0.20;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`)