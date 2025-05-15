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

