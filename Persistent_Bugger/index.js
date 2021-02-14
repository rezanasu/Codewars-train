/*
    Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

    persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
                       // and 4 has only one digit

    persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
                            // 1*2*6 = 12, and finally 1*2 = 2

    persistence(4) === 0 // because 4 is already a one-digit number
*/

function persistence(num) {
   //code me
   let result = 0;

   let numString = num.toString();
   let numbers = [];
   if(numString.length === 1) {
       return result;
   }

   for(let i = 0; i < numString.length; i++) {
       numbers.push(Number(numString[i]));
   }
 
   result = multiply(numbers, 0);

   return result;
}

function multiply(numbers, count) {

    if(numbers.length === 1) {
        return count;
    }

    let multiplication = 1;
    let nextNumbers = [];

    for(let i = 0; i < numbers.length; i++) {
        multiplication *= numbers[i];
    }
    
    let multiString = multiplication.toString();
    for(let j = 0; j < multiString.length; j++) {
        nextNumbers.push(multiString[j]);
    }


    count++;
   // console.log(nextNumbers);
    return multiply(nextNumbers, count);
}

console.log(persistence(39));
console.log(persistence(999));