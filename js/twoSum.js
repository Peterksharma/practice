/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let nums = [1,2,2,5]
let target = 4

//I got the condition in the for loop wrong
// I got the comparison in the if statement wrong


var twoSum = function(nums, target) {

    for (let i = 0; i < nums.length; i++) {
        if (correctTarget === target) {
            let correctTarget = nums[i]+ nums[i+1]
            let correctAnswer = []
            correctAnswer.push(nums[i])
            correctAnswer.push((nums[i]))
            return correctAnswer
        }  else {
            return
        }
    }
};

// This is an AI generated answer
//I had the for loop concept correct
//I got wrong that I need to do a nested for loop.
//the second for loop is how you do the comparison.
// let j =i+i is saying the nest position in the array.
// now we can do the if statement to strictly compare if they are the same.
// We can return the values as an array not to have to create a new array

var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]; // Return indices, not values (per standard problem definition)
            }
        }
    }
    return []; // No solution found
};

// When are nested for loops ok...
// When comparing each element with every other element
// Grid/Matrix Traversal
// when solving problems with quadratic time complexity (Brute Force, Every Permiation)
// When one pass through the data is not enough.