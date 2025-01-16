const stringCalculator = (inputString) => {
    let delimeter = ','
    const numArray = inputString.split(delimeter).map(Number);

    const negativeNumbers = numArray.filter(n => n < 0);
    if(negativeNumbers.length) {
        throw new Error('Negative numbers not allowed: ' + negativeNumbers.join(', '));
    }

    return numArray.reduce((acc,cur) => acc + cur, 0);
}

export default stringCalculator