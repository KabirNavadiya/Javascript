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


// string

const firstName = "Kabir";
const job = "Trainee Engineer";
const birthYear = 2003;
const year = 2024;
const kabir = "I'm " + firstName + ', a ' + (year-birthYear) + ' years old ' + job + '!';
console.log(kabir);

//tempelate literals

const kabirnew = `I'm ${firstName}, a ${(year-birthYear)} years old ${job}!`;
console.log(kabirnew);
