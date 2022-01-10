

// Implement a function called countUniqueValues, which accepts a sorted array and counts the unique values in the array.There can be negative numbers in the array, but it will always be sorted.

//     Examples
// countUniqueValues([1, 1, 1, 1, 2]) // 2
// countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]) // 7
// countUniqueValues([]) // 0
// countUniqueValues([-2, -1, -1, 0, 1]) // 4


// Extra Challenge
// Time Complexity O(n)
// Space Complexity O(n)

// Constraints
// Array always sorted

// Ref
// Udemy - JS Algos and Data Structures






array = [1, 1, 1, 1, 2];

function countUniqueValues(sortedArray) {
	if (sortedArray.length === 0)	{
	 return 0
	}
	let tally = 1;
   
    for (let i = 1; i < sortedArray.length; i++) {
       if (sortedArray[i] != sortedArray[i - 1]) tally++;
       
    };
    	return tally;
};
console.log(countUniqueValues(array));
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
console.log(countUniqueValues([]));
console.log(countUniqueValues([-2, -1, -1, 0, 1]));