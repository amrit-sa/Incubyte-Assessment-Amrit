import stringCalculator from "../app";

describe('stringCalculator' , () => {
    test('it handles empty string', () => {
        expect(stringCalculator('')).toBe(0);
    })

    test('it return the sum of all positive numbers in the string', () => {
        expect(stringCalculator('1')).toBe(1);
    })

})