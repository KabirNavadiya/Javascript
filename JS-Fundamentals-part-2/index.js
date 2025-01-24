// //functions

// function logger() {
//     console.log("My name is kabir navadiya ");
// }

// //calling/ running/ invoking function
// logger();

// function fruitProcessor(apples,oranges) {
//     console.log(apples,oranges);
//     const juice= `Juice with ${apples} apples and ${oranges} oranges.`; 
//     return juice;
    
// }
// // fruitProcessor(2,3);
// const myJuice = fruitProcessor(2,3);
// console.log(myJuice);
// console.log(fruitProcessor(4,5));




// //function declaration vs expression

// //function declaration - we can call before declareation
// function calcAge1(birthYear) {
//     return 2037 - birthYear;

// }
// const age1 = calcAge1(1991);
// console.log(age1);

// // function expression - will not work if we call before initialization.
// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }
// const age2 = calcAge2(1991);
// console.log(age1, age2);



// // Arrow functions

// const calcAge3 = birthYear=>2037 - birthYear;
// const age3=calcAge3(1991);
// console.log(age3);

// const yearUnitRetirement = (birthYear,firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement} years`;
//     // return retirement;
// }

// console.log(yearUnitRetirement(1991,"kabir"));
// console.log(yearUnitRetirement(1980,"utsav"));



// // functions calling other functions

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }
// function fruitProcessor(apples,oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);
    
//     const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces.`;
//     return juice;
// }

// console.log(fruitProcessor(2,3));

//Functions challenge 


/* Write your code below. Good luck! 🙂 */

// const calcAverage = (score1,score2,score3)=>{
//     const avg = (score1 + score2 + score3)/3;
//     return avg;
// }
// const scoreDolphins = calcAverage(44,23,71);
// const scoreKoalas = calcAverage(65,54,49);

// function checkWinner(avgDolphins,avgKoalas){
//     if(avgDolphins>avgKoalas && avgDolphins >= 2*avgKoalas){
//         console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//     }else if (avgKoalas>avgDolphins && avgKoalas >= 2*avgDolphins){
//         console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
//     }else{
//         console.log(`No team wins...`);
//     }
// }

// console.log(checkWinner(scoreDolphins,scoreKoalas));

// Loops 

// // for loop

// for(let i = 1;i<=5;i++){
//     console.log(`Lifting weights repetition ${i}.`);
// }


// // while loop 
// let i =1;
// while(i<=5){
//     console.log(`lifting weights with repetition ${i}.`);
//     i++;
// }


// let dice = Math.trunc(Math.random() * 6)+1;
// while(dice != 6){
//     console.log(`you rolled a ${dice}.`);
//     dice = Math.trunc(Math.random() * 6)+1;
//     if (dice === 6) {
//         console.log(`Rolled ${dice}.`);
        
//     }
// }


// Introduction to Arrays.

// const friends =  ["kabir", "dhairya","raj","harsh","rudra","urvin"];
// console.log("Array size :",friends.length);

// for(let i=0;i<friends.length;i++){
//     console.log(friends[i]);
// }

// const years = new Array(2000,2001,2002,2003,2004);
// const calcAge = function (birthYear) {
//     return 2024 - birthYear;
// }
// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[2]);
// console.log(age1,age2,age3);


// // functions as a element of array (expression).
// const ages = [calcAge(years[0]),calcAge(years[1]),calcAge(years[2])]
// console.log(ages);



// //Array methods.

// //add
// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends,friends.length);

// friends.push('Jay'); // add element at last pos of array.
// console.log(friends,friends.length);


// friends.unshift('John'); // add element at begining of array.
// console.log(friends , friends.length);


// //remove
// const popped=friends.pop(); // remove last element of array.
// console.log("popped element :",popped);

// console.log(friends,friends.length);


// friends.shift(); // remove first element of array.
// console.log(friends,friends.length);

// // index of
// console.log(friends.indexOf('Steven'));


// // includes.
// console.log("Steven present?",friends.includes('Steven'));
// console.log("bob present?",friends.includes('bob'));


// // #Challenge Array 

// /* Write your code below. Good luck! 🙂 */

// const calcTip = (billValue)=>{
//     let tipvalue;
//     if(billValue>=50 && billValue<=300){
//         tipvalue = billValue*0.15;
//     }else{
//         tipvalue=billValue*0.20;
//     }
//     return tipvalue;
// }

// const bills = new Array(125,555,44);
// const tips = new Array(calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2]));

// console.log(bills);
// console.log(tips);

// const total = [];
// for(let i;i<bills.length;i++){
//     let totalBillValue = bills[i]+tips[i];
//     total.push(totalBillValue);
// }
// console.log(total);




