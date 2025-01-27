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



// // ES6 CLASSES

// class Personcl{
//     constructor(firstName,birthYear){
//         this.firstName=firstName;
//         this.birthYear=birthYear;
//     }

//     // Methods will be added to .prototype property.
//     calcAge(){
//         console.log(2024 - this.birthYear);
//     }
//     greet(){
//             console.log(`Hey ${this.firstName}`);
//         }
// }

// const jessica = new Personcl('Jessica',1996);
// jessica.calcAge();

// // Personcl.prototype.greet= function(){
// //     console.log(`Hey ${this.firstName}`);
// // }
// jessica.greet();

// // 1. classes are NOT hoisted (means we cannot use them before declaration.)
// // 2. classes are first-calss citizens(means we can pass them with function and also return them.)
// // 3. body of classes is always executed in strict mode.



// // GETTERS & SETTERS

// const account= {

//     owner:'kabir',
//     movements:[200,530,120,300],

//     get latest(){
//         return this,this.movements.slice(-1).pop();
//     },
//     set latest(mov){
//         this.movements.push(mov);
//     }
// };

// console.log(account.latest);
// account.latest = 50;
// console.log(account.movements);



// // STATIC METHOD
// class StaticMethod {
//     static hey(){
//         console.log(`Hey There! Good afternoon.`);     
//     }
// }
// StaticMethod.hey(); 



// // Object.create

// const PersonProto = {
//     calcAge(){
//         console.log(2024 - this.birthYear);
//     },
//     init(firstName,birthYear){
//         this.firstName=firstName;
//         this.birthYear=birthYear;
//     }
// }
// const steven = Object.create(PersonProto);
// steven.init("Steven",2003);
// steven.calcAge();


// // # CHALLENGE 2

// class Carcl {
//     constructor(make,speed){
//         this.make=make;
//         this.speed=speed;
//     }
//     accelerate(){
//         this.speed+=10;
//         console.log(`${this.make} is going ar ${this.speed} km/h`);
//     }
//     brake(){
//         this.speed-=5;
//         console.log(`${this.make} is going ar ${this.speed} km/h`);
//     }

//     get speedUS(){
//         return this.speed / 1.6;
//     }
//     set speedUS(speed){
//         this.speed = speed * 1.6;
//     }
// }

// const ford = new Carcl('Ford',120);
// console.log(ford.speedUS);
// ford.accelerate();
// ford.accelerate();
// ford.brake();
// ford.speedUS = 50;
// console.log(ford);


// // Inheritance between "classes" : constructor functions.

// const Person = function(firstName,birthYear){
//     this.firstName=firstName;
//     this.birthYear=birthYear;

// };
// Person.prototype.calcAge = function (){
//     console.log(2024-this.birthYear);
    
// };

// const Student = function(firstName,birthYear,course){
//     Person.call(this,firstName,birthYear); // inheriting Person property in student. direct function call not works so use .call with it.
//     this.course = course;
// };

// // Linking prototypes
// Student.prototype = Object.create(Person.prototype); // now we can use mike.calcAge();


// Student.prototype.introduce = function(){
//     console.log(`My Name is ${this.firstName} and I study ${this.course}`);
    
// }
// const mike = new Student('Mike',2003,'Computer Science');
// mike.introduce();
// mike.calcAge();



// // # CHALLENEGE 3


// const Car = function(make , speed){
//     this.make=make;
//     this.speed=speed;
// };

// Car.prototype.accelerate = function(){
//     this.speed += 10;
//     console.log(`${this.make} is going at ${this.speed} km/h`);
    
// }
// Car.prototype.brake = function(){
//     this.speed -= 5;
//     console.log(`${this.make} is going at ${this.speed} km/h`);
// }

// const EV = function(make,speed,charge){
//     Car.call(this,make,speed);
//     this.charge = charge;
// }

// //Linking the prototypes.
// EV.prototype = Object.create(Car.prototype);

// EV.prototype.chargeBattery=function(chargeTo){
//     this.charge=chargeTo;
// }

// EV.prototype.accelerate = function(){
//     this.speed +=20;
//     this.charge--;
//     console.log(`${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}`);
    
// }
// const tesla = new EV('Tesla',120,23);
// tesla.chargeBattery(90);
// console.log(tesla);
// tesla.brake()
// tesla.accelerate();


