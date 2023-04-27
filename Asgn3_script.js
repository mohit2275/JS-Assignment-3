// Ques 1 - takes number and return the factorial of it
// function factor(x) {
//     if (x === 0) {
//         return 1
//     }
//     else {
//         let sum = 1;
//         for (i = x; i >= 1; i--) {
//             sum = sum * i;
//         }
//         return sum
//     }
// }
// let a = 5;
// console.log(factor(a));



// Ques 2 - returns string  reversed
// function ulta(x) {
//     let word = '';
//     for (i = x.length - 1; i >= 0; i--) {
//         word = word + x[i]
//     }
//     return word
// }
// let a = "Mohit";
// console.log(ulta(a));



// Ques 3 - returns avg of numbers
// function avg(x) {
//     let sum = 0;
//     let count = 0;
//     for (i = 0; i < x.length; i++) {
//         sum = sum + x[i];
//         count++;
//     }
//     return (sum / count)
// }
// let a = [1, 2, 3, 4, 5]
// console.log(avg(a));



// Ques 4 - array of reverse strings
// function reverse(x) {
//     let arr = [];
//     for (i = 0; i < x.length; i++) {
//         let word = "";
//         for (k = x[i].length - 1; k >= 0; k--) {
//             word = word + x[i][k]
//         }
//         arr.push(word)
//     }
//     return arr;
// }
// let a = ["mohit", "vikas", "dixit"]
// console.log(reverse(a));



// Ques 5 - new array with values of specific property
// function specific(arr, prop) {
//     let arr2 = [];
//     for (i = 0; i < arr.length; i++) {
//         arr2.push(arr[i][prop])
//     }
//     return arr2;
// }
// let x = [
//     { name: 'Mohit', age: 25 },
//     { name: 'Vikas', age: 26 },
//     { name: 'Dixit' }
// ]
// console.log(specific(x, 'age'));



// Ques 6 -If the number is prime then true
// function prime(x) {
//     count = 0;
//     for (i = 1; i <= x; i++) {
//         if (x % i == 0) {
//             count++
//         }
//     }

//     if (count > 2) {
//         return false
//     }
//     else {
//         return true
//     }
// }
// let num = 4;
// console.log(prime(num));



// Ques 7 - If palindrome then true
// function palindrome(word1) {
//     let word2 = '';
//     for (i = word1.length - 1; i >= 0; i--) {
//         word2 = word2 + word1[i];
//     }
//     if (word1 == word2) {
//         return true;
//     }
//     else {
//         return false
//     }
// }
// let a = "madam"
// console.log(palindrome(a));



// Ques 8 - returns the largest number in the array of numbers
// function big(x) {
//     let largest = x[0];
//     for (i = 1; i < x.length; i++) {
//         if (x[i] > largest) {
//             largest = x[i];
//         }
//     }
//     return largest;
// }
// let a = [6, 8, 1, 34, 56, 78, 21, 9]
// console.log(big(a));



// Ques 9 - return the shortest string in the array
// function shortString(x) {
//     let shortest = x[0];
//     for (i = 1; i < x.length; i++) {
//         if (x[i].length < shortest.length) {
//             shortest = x[i];
//         }
//     }
//     return shortest;
// }
// let a = ['Mohit', 'dev', 'nitish', 'om', 'Vikram']
// console.log(shortString(a));



// Ques 10 - 
let arr = [
    { obj1: "vikas", age: 25 },
    { obj2: "mohit", age: 28 }
]

function highestvalue(arr, prop) {
    let max = 0
    for (let i = 0; i < arr.length; i++) {

        for (let key in arr[i]) {
            if (key === prop) {
                if (arr[i][key] > max) {
                    max = arr[i][key]
                }

            }
        }
    }
    for (let i = 0; i < arr.length; i++) {

        for (let key in arr[i]) {
            if (key === prop) {
                if (arr[i][key] == max) {
                    max = arr[i][key]
                    return arr[i]
                }

            }
        }
    }
}

console.log(highestvalue(arr, "age"))