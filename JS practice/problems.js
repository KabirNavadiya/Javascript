// 1]
// Create a function to sort all the numbers in the array, but the "-1" should not change its position
// For example
// [9, -1, 2, 12, 5, -1, -1, 0, 15] => [0, -1, 2, 5, 9, -1, -1, 12, 15]
// [12, -2, -1, 2, -1, 5, -1, -3, -5] => [-5, -3, -1, -2, -1, 2, -1, 5, 12]


// 2]
// Create a function to reverse the string inside the parentheses and then remove the parentheses. Start the reversing process from inner most parentheses to outer
// For example:
// foo(car)bar => fooracbar
// foo(car(bar))baz => foovarracbaz
// foo(car(bar(baz))) => barzabrac
// foo(cash(va(asd(qwe)f)stas)dash) => foohsadvafqwedsastashsac
 

// function sortArray(array){

//     for(let i=0;i<array.length-1;i++){
//         if(array[i]===-1){
//             continue;    
//         }
//        let min = i;
//        for(let j=i+1;j<array.length;j++){
//             if(array[j]< array[min] && array[j] !== -1 ){
//                 min = j;
//             }
//        }
//        let temp = array[i];
//        array[i] = array[min];
//        array[min] = temp;
//     }

//     return array;

// }


// const arr = [100, -1, -50, 20, 10, -1, 0, -1, -100, 30]

// for(let i=0;i<arr.length;i++){
//     process.stdout.write(arr[i]+":"+i+" ");
// }
// const newArray = sortArray(arr)
// console.log();

// for(let i=0;i<arr.length;i++){
//     process.stdout.write(newArray[i]+ ":"+i+" ");
// }




// 2]

function reverseSubstring(str) {
    let stack = [];
    
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ")") {
            let dummy = "";
            // Pop until you find the opening parenthesis '('
            while (stack.length > 0 && stack[stack.length - 1] !== "(") {
                dummy += stack.pop();
            }
            stack.pop(); // Remove the opening parenthesis '('
            // Push the reversed substring back onto the stack
            for (let j = 0; j < dummy.length; j++) {
                stack.push(dummy[j]);
            }
        } else {
            // Push the current character onto the stack
            stack.push(str[i]);
        }
    }

    // Rebuild the string from the stack
    let temp = "";
    while (stack.length > 0) {
        temp += stack.pop();
    }
    
    return temp.split('').reverse().join('');
}


// foo(car(bar(baz))) => barzabrac
// foo(cash(va(asd(qwe)f)stas)dash) => foohsadvafqwedsastashsac
// foo(car)bar => fooracbar
// foo(car(bar))baz => foovarracbaz
// const str = "foo(car)bar";
const str = "foo(cash(va(asd(qwe)f)stas)dash)";
console.log(reverseSubstring(str));
