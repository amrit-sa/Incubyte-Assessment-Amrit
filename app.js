import { generateErrorLog, generateInvalidCharsError } from "./helper";

const getCharacters = (inputString) => {
    let delimeter = ',';
    let filteredString = inputString;
    if(inputString.startsWith('//') && isNaN(Number(inputString.charAt(2)))){
        delimeter = inputString.charAt(2);
        filteredString = inputString.substring(2,inputString.length)
    }

    const charArray = filteredString.split(delimeter);
    
    return charArray;
}

const add = (inputString) => {

    const charArray = getCharacters(inputString);
    
    const invalidChars = charArray.filter(char => isNaN(Number(char)));
    if(invalidChars.length){
        throw new Error(generateInvalidCharsError(invalidChars));
    }

    const numArray = charArray.map(Number).filter(n => !isNaN(n))
    
    const negativeNumbers = numArray.filter(n => n < 0);
    if(negativeNumbers.length) {
        throw new Error(generateErrorLog(negativeNumbers));
    }

    return numArray.reduce((acc,cur) => acc + cur, 0);
}



export default add