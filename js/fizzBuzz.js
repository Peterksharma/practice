/**
 * @param {number} n
 * @return {string[]}
 */


var fizzBuzz = function(n) {
    let fizz = 3
    let buzz = 5
    let answer = []

    for (let position = 1; position <= n; position++ ) {
        if (position % fizz === 0 && position % buzz === 0) {
            answer.push("FizzBuzz")
          } else if (position % buzz === 0) {
            answer.push("Buzz")
          } else if (position % fizz === 0){
            answer.push("Fizz")
          } else {
            answer.push(position.toString())
          }
    }
    return answer
};


//position < n should have been position <= n
// I miss that the numbers were strings in the array.
// I pushed buzz for both 3 and 5.

