// const cart = ["shoes","pants","kurta"];

// //flow ->  1,2,3,4,...... see comments

// // called when we resolve a promise
// createOrder(cart) //1
//     .then(function(orderId){  //6
//         console.log(orderId);
//         return orderId;
//     })
//     .then(function(orderId){ 
//         // console.log(orderId);
//         //console.log(proceedToPayment(orderId));
//         return proceedToPayment(orderId); // returns a promise to next call back function.
        
//     })
//     .then(function(paymentInfo){
//         console.log(paymentInfo);
        
//     })
//     // called when we reject a promise
//     .catch((err)=>{ //7
//         console.log(err.message);  
//     })


// function validateCart(cart){  //4 if true then resolved else rejected in this logic
//     return true;
//     // return false;
// }
// function createOrder(cart){  //2
//     const pr = new Promise(function(resolve,reject){
        
//         // createOrder
//         //validateCart
//         //OrderId

//         if(!validateCart(cart)){  //3
//             const err = new Error("cart is not valid");
//             reject(err);
//         }

//         const orderId = "12345";
//         if(orderId){
//             setTimeout(() => {
//                 resolve(orderId)
//             }, 5000);
//         }
//     })
//     return pr; //5
// }

// function proceedToPayment(orderId){
//     // proceed to payment.

//     return new Promise((resolve,reject)=>{
//         resolve("Payment success !");
//     })

// }



// homework to create promise chaining 

// createOrder->proceedtoPayment->showordersummary->updatewallet

cart = ["Shirt","Hoodie","Shoes","Pants"];


createOrder(cart)
.then((orderId)=>{
    console.log(orderId);
    return orderId;
})
.then((orderId)=>{
    return proceedToPayment(orderId);
})
.then((paymentInfo)=>{
    console.log(paymentInfo);
    return orderSummmary(paymentInfo);
})
.then((orderInfo)=>{
    console.log((orderInfo));
    return updatewallet(orderInfo);
})
.then((ordercost)=>{
    console.log(ordercost);
})
.catch((err)=>{
    console.log(err.message);
    
})

function proceedToPayment(orderId){
    // proceed to payment.

    return new Promise((resolve,reject)=>{
        resolve("Payment success !");
    })

}
function orderSummmary(paymentInfo){
    return new Promise((resolve,reject)=>{
        resolve("Order Summary");
    })
}
function updatewallet(paymentInfo){
    return new Promise((resolve,reject)=>{
        resolve("Wallet Updated");
    })
}


function validateCart(){
    return true
}
//created apromise
function createOrder(cart){

    const pr = new Promise((resolve,reject)=>{

        if(!validateCart(cart)){
            const err = new Error("cart not valid");
        }

        const orderId="1234";
        if(orderId){
            setTimeout(()=>{
                resolve(orderId);
            },3000);
        }
    })
    return pr;
}