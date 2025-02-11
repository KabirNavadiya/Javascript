// Write a JavaScript function numberToWords(num) that takes an integer and returns its English representation in words. Your function should handle numbers up to at least 999,999,999.

// Test Cases:
// console.log(numberToWords(1000));      // "One Thousand"
// console.log(numberToWords(10));        // "Ten"
// console.log(numberToWords(11));        // "Tleven"
// console.log(numberToWords(21));        // "Twenty One"
// console.log(numberToWords(21000));     // "Twenty One Thousand"
// console.log(numberToWords(210000));    // "Two Lacs and Ten Thousand"
// console.log(numberToWords(999999999)); // "Ninety Nine Crores Ninety Nine Lacs Ninety Nine Thousand Nine Hundred Ninety Nine"


function numberToWords(num) {
    const ones = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
        "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    const ty = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

    let n = num.toString().length;
    let word = '';
    //crore
    if (n == 8 || n == 9) {
        let val = Math.floor(num / 10000000);
        if (val < 20) {
            word += (ones[val] + " crore ");
        }
        else {
            word += (ty[Math.floor(val / 10)] + " " + ones[val % 10] + " crore ");
        }

        num = num % 10000000;
        n = 7;
    }

    //lakh
    if (n == 7 || n == 6) {
        let val = Math.floor(num / 100000);
        if (val < 20) {
            word += (ones[val] + " lakh ");
        }
        else {
            word += (ty[Math.floor(val / 10)] + " " + ones[val % 10] + " lakh ");
        }

        num = num % 100000;
        n = 5;
    }

    //thousand
    if (n == 5 || n == 4) {
        let val = Math.floor(num / 1000);
        if (val < 20) {
            word += (ones[val] + " thousand ");
        }
        else {
            word += (ty[Math.floor(val / 10)] + " " + ones[val % 10] + " thousand ");
        }

        num = num % 1000;
        n = 3;
    }
    //hundred
    if (n <= 3) {
        // console.log(" " + word);
        let val = Math.floor(num / 100);
        if (val) {
            word += (ones[val] + " hundred ");
        }
        let val2 = num % 100;
        if (val2 < 20) {
            word += (" " + ones[val2]);
        }
        else {
            word += (" " + ty[Math.floor(val2 / 10)] + " " + ones[val2 % 10]);
        }

    }


    return word;
}

let ans = numberToWords(999999999);
console.log(ans);

// let ans = numberToWords(11);
// console.log(ans);





