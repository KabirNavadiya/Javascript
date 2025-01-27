// throw, and try...catch..finally 

// The try statement defines a code block to run (to try).

// The catch statement defines a code block to handle any error.

// The finally statement defines a code block to run regardless of the result.

// The throw statement defines a custom error.



// try {
//     adddlert("Welcome Guest !");
// } catch (err) {
//     document.getElementById("demo").innerHTML = err.message;
// }finally block


// The THROW statement allows you to create a custom error.

function myThrowFunc(){
    const message = document.getElementById("p01");
    const msg = document.getElementById("p02");
    let x = document.getElementById("input_msg").value;
    message.innerHTML="YAY ! You selected : "+x;
    try {

        if(x.trim()=="") throw "empty input! please enter something";
        if(isNaN(x)) throw "Invalid Input! not a number";
        x=Number(x);
        if(x<5) throw "Number less than 5! not valid";
        if(x>10) throw "Number greater than 10 ! too Big !!!";
    } catch (err) {
        message.innerHTML="Input is  " + err;
    }
    finally{
        msg.innerHTML=document.getElementById("p02").value= "finally block" ;
       
    }
}