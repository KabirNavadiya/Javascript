// // CONSTRUCTOR FUNCTIONS AND NEW OPERATORS


// const Person = function (firstName,birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;

//     // will work but,
//     //bad practice (never do this)
//     // this.calcAge = function(){
//     //    console.log(2024-this.birthYear);
        
//     // };

// }

// const kabir = new Person('Kabir',2003);
// // 1. new {} is created
// // 2. function is called, this = {}
// // 3. {} linked to prototype
// // 4. function automatically return {}

// const utsav = new Person("Utsav",2001);
// console.log(kabir,utsav);


// // PROTOTYPES

// // basic prototypal inheritance.
// //instead of definig function in constructor function do this.

// // console.log(Person.prototype);
// Person.prototype.calcAge= function(){
//        console.log(2024-this.birthYear);
        
// };
// kabir.calcAge();
// utsav.calcAge();
// // console.log(kabir.__proto__);
// // console.log(kabir.__proto__ === Person.prototype);

// Person.prototype.species = "Homo Sapiens";
// console.log("Kabir's species : ",kabir.species);
// console.log("kabir has property(species) ? ",kabir.hasOwnProperty('species'));


// // PROTOTYPAL INHERITANCE ON BUILT-IN OBJECTS.


// // console.log(kabir.__proto__);
// // console.log(kabir.__proto__.__proto__);
// // console.log(kabir.__proto__.__proto__.__proto__);

// const arr = [1,2,3,3,3,2];
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);

// Array.prototype.unique=function(){
//     return [...new Set(this)]
// };
// console.log(arr.unique());


// # CODING CHALLENEGE ...

// const Car = function(make , speed){
//     this.make=make;
//     this.speed=speed;
// };

// const bmw = new Car('BMW',120);
// const mercedes = new Car('Mercedes',95);

// Car.prototype.accelerate = function(){
//     this.speed += 10;
//     console.log(`${this.make} is going at ${this.speed} km/h`);
    
// }
// Car.prototype.brake = function(){
//     this.speed -= 5;
//     console.log(`${this.make} is going at ${this.speed} km/h`);
// }
// bmw.accelerate();
// bmw.accelerate();
// bmw.brake();
// bmw.accelerate();
// bmw.accelerate();



// ES6 CLASSES

