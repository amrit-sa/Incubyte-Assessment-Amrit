const stringCalculator = (inputString) => {

    let delimeter = ','
    if(inputString.startsWith('//') && isNaN(Number(inputString.charAt(2)))){
        delimeter = inputString.charAt(2);
    }
    const numArray = inputString.split(delimeter).map(Number).filter(n => !isNaN(n))
    
    const negativeNumbers = numArray.filter(n => n < 0);
    if(negativeNumbers.length) {
        throw new Error('Negative numbers not allowed: ' + negativeNumbers.join(', '));
    }

    return numArray.reduce((acc,cur) => acc + cur, 0);
}

export default stringCalculator