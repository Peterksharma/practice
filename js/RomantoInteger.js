const numberConversion = {
    I:1,
    V:5,
    X:10,
    L:50,
    C:100,
    D:500,
    M:1000
}




function romanToNumber(numberConversion) {
    let convertedNumer = 0
    
    const numeral = "IDM" 
    
    for (let i = 0; i < numeral.length; i++){
         if (i < number.length - 1 && numberConversion[numeral[i]] < numbeConversion[numeral[i+1]]) {
            convertedNumber -= numberConvserion[numeral[i]]
         } else { 
            convertedNumber += numberConversion[numeral[i]]
         } 
    }


    return convertedNumber
    console.log(convertedNumber)
}

­
