import { generateErrorLog, generateInvalidCharsError } from "./helper";

const add = (inputString) => {

    let delimeter = ','

    // Use the delimeter if present.
    if(inputString.startsWith('//') && isNaN(Number(inputString.charAt(2)))){
        delimeter = inputString.charAt(2);
    }

    
    // Create an Array of only valid numbers keeping negative numbers as it is.
    const strArray = inputString.split(delimeter);
    
    // a,b,c
    // [a,b,c]
   
    const invalidChars = strArray.filter(char => isNaN(Number(char)));
    if(invalidChars.length){
        throw new Error(generateInvalidCharsError(invalidChars));
    }


    const numArray = strArray.map(Number).filter(n => !isNaN(n))
    
    // Throw exception error if there is/are negative number/s.
    const negativeNumbers = numArray.filter(n => n < 0);
    if(negativeNumbers.length) {
        throw new Error(generateErrorLog(negativeNumbers));
    }

    // Return the sum of all positive integers.
    return numArray.reduce((acc,cur) => acc + cur, 0);
}

export default add