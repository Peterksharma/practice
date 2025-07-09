


/**
 * @param {number[]} digits
 * @return {number[]}
 */

let digits = [1,2,3,4]

var plusOne = function(digits) {
    let newNumber = digits.pop()
    const addNewDigitPosition = (digits) => {
        
     }
    
    if(newNumber === 9 ) {
        digits.push(1)
        digits.push(0)
        console.log(digits)
    } else {
        digits.push(newNumber + 1)
        console.log (digits)
    }
};

plusOne(digits)