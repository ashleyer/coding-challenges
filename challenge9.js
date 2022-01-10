// Max Sum Path
// You are given two sorted lists, with distinct elements. Find the maximum path sum while traversing through the lists.

// Points to consider for a valid path:

// - A path can start from either list, and can finish in either list.
// - If there is an element which is present in both lists (regardless of its index in the lists), you can choose to change your path to the other list.

// Return only the maximum path sum.

// Examples
// [0, 2, 3, 7, 10, 12]
//    [1, 5, 7, 8]

// Both lists having only 7 as common element, the possible paths would be:

// 0->2->3->7->10->12 => 34
// 0->2->3->7->8      => 20
// 1->5->7->8         => 21
// 1->5->7->10->12    => 35 (maximum path)

// Hence, the output will be 35 in the example above.
// Constraints
// The arrays may contain no common terms.
// The common element should only be counted once.
// Range of possible inputs: 0 <=len(l1), len(l2) <= 125000


//join the two sorted lists. are they sorted?
//then, for loop to find duplicate elements
//go back to given lists, locate the duplicate indexes


function mergeTwoLists(list1, list2, i) {
    list1 = [0, 2, 3, 7, 10, 12];
    list2 = [1, 5, 7, 8];
    i = list1[i];
    let list3 = [];
    if (list1.length === 0 || list2.length === 0) {
        return 0;
    }
    while (list1.length > 0 && list2.length > 0) {
        let listOne = list1.shift() + list2.shift();
        let listTwo = list1.shift() + list2.shift();
        let singleList = mergeSortLists(listOne, listTwo);
        list3.push(singleList);
    }
    return list3


    function mergeSortLists(listOne, listTwo) {
        let fakeNode = list3[0]
        let nodeNow = fakeNode

        while (listOne && listTwo) {
            if (listOne.val < listTwo.val) {
                nodeNow = listOne[i++]
                listOne[i++] = listOne
            } else {
                listTwo[i++] = nodeNow
                listTwo[i++] = listTwo
            }
            nodeNow = nodeNow
        }
        nodeNowNext= listOne || listTwo
        return fakeNode
    }
};
mergeTwoLists();