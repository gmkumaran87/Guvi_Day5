// Print Odd numbers in Array
var arr = [1, 2, 3, 4, 5, 7, 77, 17, 32, 6, 9, 15, 20];

(function() {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            console.log(arr[i]);
        }
    }
})();

//Convert all the strings to title caps in a string array

var arr1 = ["muthu", "kumaran", "kavin", "lavanya"];

(function() {
    for (let i = 0; i < arr1.length; i++) {
        let word = arr1[i];

        console.log(word.slice(0, 1).toLocaleUpperCase() + word.substr(1));
    }
})();

//Sum of all numbers in an array
(function() {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(sum);
})();

// Rotate array by k-length
var arr2 = [1, 2, 3, 6, 8, 6, 1, 9, 10, 12, 13];
var k = 3;
k = arr2.length % k;
console.log(`k`, arr2.length, k);

(function() {
    // arrTemp = {};
    out = arr2.slice(k + 1, arr2.length);
    var count = out.length;
    for (var i = 0; i < k + 1; i++) {
        out[count] = arr2[i];
        count += 1;
    }
    console.log(out);
})();

//Return all the prime numbers in an array
var arr = [1, 2, 3, 4, 5, 7, 77, 17, 32, 6, 9, 15, 20];
(function() {
    for (let i = 0; i < arr2.length; i++) {
        let prime = true;
        if (arr[i] === 1 && arr[i] === 0) console.log(`Number ${arr[i]} is Prime`);

        if (arr[i] === 2 && arr[i] === 3)
            return console.log(`Number ${arr[i]} is Prime`);

        let sqrtNum = Math.floor(Math.sqrt(arr[i]));

        for (let j = 2; j < sqrtNum + 1; j++) {
            if (arr[i] % j === 0) {
                console.log(`Number ${arr[i]} is NOT Prime`);
                prime = false;
            }
        }
        if (prime) console.log(`Number ${arr[i]} is Prime`);
    }
})();

// Return all the palindromes in an array
var palindromeArr = ["Malayalam", "eeee", "Muthu"];

(function() {
    for (let i = 0; i < palindromeArr.length; i++) {
        var word = palindromeArr[i].toLocaleLowerCase();
        var reverse = "";

        for (let j = word.length - 1; j >= 0; j--) {
            reverse += word[j].toLocaleLowerCase();
        }

        if (word === reverse) console.log(`Word ${word} is Palindrome`);
    }
})();

// Remove the Duplicates

var dupArr = ["abcd", "muthu", "kavin", "muthu", "abcd"];

(function() {
    var uniqueArr = [];

    dupArr.forEach((el) => {
        if (uniqueArr.indexOf(el) === -1) {
            uniqueArr.push(el);
        }
    });

    console.log(uniqueArr);
})();

// Arrow Function Odd numbers in array

console.log("Odd numbers in an Array");
const OddNum = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            console.log(arr[i]);
        }
    }
};

OddNum(arr);

// Convert all the strings to title caps in a string array

const titleCaps = (arr) => {
    for (let i = 0; i < arr1.length; i++) {
        let word = arr1[i];

        console.log(word.slice(0, 1).toLocaleUpperCase() + word.substr(1));
    }
};

titleCaps(arr1);

// Sum of numbers in Array
console.log(arr.reduce((a, b) => a + b));