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