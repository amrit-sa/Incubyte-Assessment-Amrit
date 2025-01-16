const stringCalculator = (inputString) => {
    let delimeter = ','
    const numArray = inputString.split(delimeter).map(Number);

    return numArray.reduce((acc,cur) => acc + cur, 0);
}

export default stringCalculator