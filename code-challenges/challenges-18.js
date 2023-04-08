'use strict';

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//
// Given a string find the length of the middle word in the sentence
//
// Ex:
// Input: "You can't handle the truth!"
// Output: 6
//
// Input: "You're gonna need a bigger boat"
// Output: 1
//

const wordLength = (str) => {
    let words = str.split(" ");
    console.log(words)
    let middleIndex = Math.floor(words.length / 2);
    console.log(middleIndex)
    let middleWord = words[middleIndex];
    console.log(middleWord)
    return middleWord.length;
  }
  
// -------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
//
// Write a function that takes two strings and checks if the two strings contain the same combination of letters
//
// Ex:
// Input: "dad", "add"
// Output: true
//
// Input: "dad", "aadd"
// Output: false
//
// Input: "table", "label"
// Output: false
//
// Input: "cat", "rat"
// Output: false

const wordLetters = (str1, str2) => {
    
    if (str1.length !== str2.length) {
        return false;
    }

    
    const str1Arr = str1.split('').sort();
    const str2Arr = str2.split('').sort();

    
    for (let i = 0; i < str1Arr.length; i++) {
        if (str1Arr[i] !== str2Arr[i]) {
            return false;
        }
    }

    return true;
}

// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Optional:
//
// Write a function that takes an integer and a sorted array
// The function returns the index of the integer in the array
// If the integer was not there, the function returns where it could have been
//
// Ex:
// Input: [1,3,5,6], 5
// Output: 2
//
// Input: [1,3,5,6], 2
// Output: 1
//
// Input: [1,3,5,6], 7
// Output: 4
//

const targetIndex = (arr, int) => {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === int) {
            return mid;
        } else if (arr[mid] > int) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return left;
}

// -------------------------------------------------------------------------------------------------------

module.exports = { wordLength, wordLetters, targetIndex };