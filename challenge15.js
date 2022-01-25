// const { SlowBuffer } = require("buffer")

// Algorithm Challenge - Longest Common Prefix
// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".
//     Examples
// Input: strs = ["flower", "flow", "flight"]
// Output: "fl"

// Input: strs = ["dog", "racecar", "car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
  
// Extra Challenge
// N / A
// Constraints
// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lower -case English letters.
//     LeetCode - 14


// _______________________________________________
// NOTES
// initial thoughts:
// strs; turn each index element into a string of alpha chars housewd in a new array.resulting in strs[i], i = how many new arrays will be made.Next, compare newly made arrays by index element: must check the equality of the chars(elements) beginning at each arrays 0 index.When the first char is not equal to the others, note arr[i], then[i - 1], end up with final index of sol.return values from 0 index to the noted index, make sure all equal.turn them into a single value.return it.if none, return ' '.
// --May actually be better done as objects(or arrays) within an array.

function getLongestCommonPrefix(strs) {
    let longestCommonPrefix = ' ';
    if (strs[0] = ' ' 
        ||
        strs.length <= 1) {
        console.log(longestCommonPrefix)
        return longestCommonPrefix
    }

    let minimumLength = strs[0].length;
    for (let i = 1; i < strs.length; i++) {
        minimumLength = Math.min(minimumLength, strs[i].length);
    }
}


strs = ['garden', 'garter', 'garner', 'garrish'];
let numStringArraysToCompare = strs.length 
//deal w capitals, know this next is wrong


let string1 = strs[0].toString().split('');
let string2 = strs[1].toString().split('');
let string3 = strs[2].toString().split('');
let string4 = strs[3].toString().split('');
let strings = [string1, string2, string3, string4];
// console.log(string1, string2, string3, string4)

console.log(strings)

// console.log(string1);
// console.log(string2);
// console.log(string3);
// console.log(string4);

// let sameElements = true;
// for (let i = 0; i < strings.length; i++) {
//     if (strings[i] <= 0) {
//         sameElements = false;
//         break;
//     }
// };


// console.log(sameElements);

let sameElements = strings.every(function (e) {
   
    return e > 0;
});
// strings.every(getPrefix, [, thisArg])   
// console.log(getPrefix);



// function getPrefix(currentElement, index, array) {
//     let commonPrefix = [].join();
// }
// let target = strings[j]
// function getPrefix(string[i], target) {
//     for (let j = 0; j <= strings.length + 1; j++)  {
//         let equalElements = '
//         '
//         let commonPrefix = [].join();
//         i === j
//         commonPrefix.push 
//         console.log(commonPrefix)
//     }
// }



