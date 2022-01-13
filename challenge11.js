// Compute Cube as Sums
// Write function findSummands(n) which will return an array of n consecutive odd numbers with the sum equal to the cube of n (nnn).

// In this Kata, you will be given a number n (where n >= 1) and your task is to find n consecutive odd numbers whose sum is exactly the cube of n.

// Examples
// findSummands(3) = [7,9,11] // because 7 + 9 + 11 = 27, the cube of 3. Note that there are only n = 3 elements in the array.


// Extra Challenge
// N/A

// Constraints
// n >= 1




function getSum(runningSum, currentValue) {
    arrayGiven = [5, 7, 9, 11]
    let sum = 0
    (runningSum + currentValue)
    sum = arrayGiven.reduce(getSum)
    console.log(sum)
}
