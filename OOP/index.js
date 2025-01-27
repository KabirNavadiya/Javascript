// constructor functions and new operator 

const Person = function (firstName,birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;

    // will work but,
    //bad practice (never do this)
    // this.calcAge = function(){
    //    console.log(2024-this.birthYear);
        
    // };

}

const kabir = new Person('Kabir',2003);
// 1. new {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const utsav = new Person("Utsav",2001);
console.log(kabir,utsav);

// Prototypes

