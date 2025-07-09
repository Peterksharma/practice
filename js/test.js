function romanToNumber(s) {
    let s = numeral
    let convertedNumber = 0
    
    const numberConversion = {
        I:1,
        V:5,
        X:10,
        L:50,
        C:100,
        D:500,
        M:1000
    }   
    
    const numeral = "IMM"
    
    for (let i = 0; i < numeral.length; i++) {
        if(i < numeral.length - 1 && numberConversion[numeral[i]] < numberConversion[numeral[i+1]]) {
            convertedNumber -= numberConversion[numeral[i]]
            } else {
                convertedNumber += numberConversion[numeral[i]]
            }
        }
        console.log("this is the converted Number", convertedNumber)
    }
romanToNumber()

