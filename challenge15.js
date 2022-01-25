// const { SlowBuffer } = require("buffer")

// Algorithm Challenge - Longest Common Prefix
// Write a function to find the longest common prefix string amongst an stringay of strings.

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
// strs; turn each index element into a string of alpha chars housewd in a new stringay.resulting in strs[i], i = how many new stringays will be made.Next, compare newly made stringays by index element: must check the equality of the chars(elements) beginning at each stringays 0 index.When the first char is not equal to the others, note string[i], then[i - 1], end up with final index of sol.return values from 0 index to the noted index, make sure all equal.turn them into a single value.return it.if none, return ' '.
// --May actually be better done as objects(or stringays) within an stringay.

function samePrefix(arr) {
    if (!arr.length) return '';
    let matchedLetter = '';
    let prefix = '';
    for(let i = 0; i < arr[0].length; i++) {
        for(let j = 0; j < arr.length; j++) {
            // console.log(arr[j][i])
            // console.log(`j is currently ${j} and i is ${i}`)
            if(j === 0) {
                matchedLetter = arr[j][i];
                // console.log(`The matched letter is ${matchedLetter}`)
            } else {
                if(matchedLetter !== arr[j][i]) {
                    // console.log("this is being returned");
                    return prefix;
                }
            }
            if(j + 1 === arr.length) {
                prefix += arr[j][i];
                // console.log(prefix);
            }
        }
    }
    return prefix
}

console.log(samePrefix(['hello', 'hell', 'hell raiser']))
console.log(samePrefix([]))
console.log(samePrefix(['halcyon', 'xylophone', 'behavior']))
console.log(samePrefix(['garden', 'garter', 'garner', 'garrish']))

// function getPrefix(string) {
//     let solution = [" "]
//     let prefix = solution.join()
//     if (string[0] = ' '
//         ||
//         string.length === 1) {
//         console.log(prefix)
//         return string[0] + ' is the longest common prefix!';
//     } else {
//         string.length === 0; {
//             return '    '
//         }

// let minimumLength = string[0].length;
//         for (let i = 1; i < string.length; i++) {
//             minimumLength = Math.min(minimumLength, string[i].length);


//             let length = string.length;


//             for (let i = 0; i < string[0].length; i++) {

//                 for (let j = 0; j < length; j++) {
//                     // console.log(string[j][i])
//                     // console.log(`j is currently ${j} and i is ${i}`)
//                     let matchedLetter = ' ';
//                     if (j === 0) {
//                         matchedLetter = string[j][i];
//                         solution.push(matchedLetter)
//                     } else {
//                         if (matchedLetter !== string[j][i]) {
//                             // console.log("this is being returned");
//                             solution.push(prefix);
//                         } else {
//                             if (j + 1 === length) {
//                                 prefix += string[j][i];
//                                 // console.log(prefix);
//                             } else {
//                                 if (matchedLetter === 0) {
//                                     solution.push(0);
//                                 };
//                             };
//                         };
//                     }

//                 }

//             }
//             if (solution.length === 0) {
//                 return " ";
//             } else {
//                 solution.join();
//                 return solution + ' is the longest common prefix!'

//             }
//         }
//         }
//     }
// }
// }
// }

    // console.log(samePrefix(['quill', 'quiche', 'quicker', 'quark', 'quince', 'qualitative', 'quest']));
    // console.log(samePrefix(['garden', 'garter', 'garner', 'garrish']));

// function getLongestCommonPrefix(strs) {
//     let longestCommonPrefix = ' ';
//     if (strs[0] = ' ' 
//         ||
//         strs.length <= 1) {
//         console.log(longestCommonPrefix)
//         return longestCommonPrefix
//     }

//     let minimumLength = strs[0].length;
//     for (let i = 1; i < strs.length; i++) {
//         minimumLength = Math.min(minimumLength, strs[i].length);
//     }
// }

// strs = ['garden', 'garter', 'garner', 'gstringish'];
// let numStringstringaysToCompare = strs.length 
// //deal w capitals, know this next is wrong

// let string1 = strs[0].toString().split('');
// let string2 = strs[1].toString().split('');
// let string3 = strs[2].toString().split('');
// let string4 = strs[3].toString().split('');
// let strings = [string1, string2, string3, string4];
// // console.log(string1, string2, string3, string4)

// console.log(strings)

// // console.log(string1);
// // console.log(string2);
// // console.log(string3);
// // console.log(string4);

// // let sameElements = true;
// // for (let i = 0; i < strings.length; i++) {
// //     if (strings[i] <= 0) {
// //         sameElements = false;
// //         break;
// //     }
// // };

// // console.log(sameElements);

// let sameElements = strings.every(function (e) {
//     return e > 0;
// });
// // strings.every(getPrefix, [, thisArg])   
// // console.log(getPrefix);



// // function getPrefix(currentElement, index, stringay) {
// //     let commonPrefix = [].join();
// // }
// // let target = strings[j]
// // function getPrefix(string[i], target) {
// //     for (let j = 0; j <= strings.length + 1; j++)  {
// //         let equalElements = '
// //         '
// //         let commonPrefix = [].join();
// //         i === j
// //         commonPrefix.push 
// //         console.log(commonPrefix)
// //     }
// // 
