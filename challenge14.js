// Algorithm Challenge - Single Number
// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// Examples
//   Input: nums = [2,2,1]
// Output: 1

// Input: nums = [4,1,2,1,2]
// Output: 4

// Input: nums = [1]
// Output: 1

// Extra Challenge
// N/A
// Constraints
// 1 <= nums.length <= 3 * 104
// -3 * 104 <= nums[i] <= 3 * 104
// Each element in the array appears twice except for one element which appears only once.
//     LeetCode - 13

// _____________________________________________
// NOTES:
// -sort ?
// -maybe use sums? 
// -filter?
// loop thru array, check each element at each index and tally its appearances from 0. once an element's tally equa
// NO START OVER
// loop thru array, at each index, get element value and loop thru again to see if it shows up again.they all will except one of them.once the index element whose appearance tally equals 1 is found, return that value and end loop and function.
// * will have to figure out how to handle if a)there is more than one index element with an appearance tally of 1; b)there are no index elements with an appearance tally of 1.
//     * only thing is that i think this would be O(n ^ 2), not ideal.



// sortedNums[i] * 2 =// let inNumsTwice = [];

let nums = [];

function getSingleInstance(nums) {

    nums = [7, 6, 9, 9, 7, 5, 2, 4, 6, 2, 5]
    let sortedNums = nums.sort((a, b) => a - b);
    console.log(sortedNums);

    let inArrayOnce = 0;

    for (let i = 0; i < sortedNums.length; i++) {
        if (i == i++) {
            (i + inArrayOnce)
            return inArrayOnce;
        } else {
            i++
        }
        // return 
    }
}
getSingleInstance(nums);