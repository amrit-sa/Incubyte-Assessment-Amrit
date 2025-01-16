import stringCalculator from "../app";

describe('stringCalculator' , () => {
    test('it handles empty string', () => {
        expect(stringCalculator('')).toBe(0);
    })

    test('it return the sum of all positive numbers in the string', () => {
        expect(stringCalculator('1')).toBe(1);
        expect(stringCalculator('1,2')).toBe(3);
    })

    test('it return the sum if new line is used in the string', () => {
        expect(stringCalculator('1,2,\n3')).toBe(6);
        expect(stringCalculator('\n2,\n3')).toBe(5);
    })

    test('it throws exception if passed negative numbers', () => {
        expect(() => stringCalculator('1,2,-3')).toThrow('Negative numbers not allowed: -3');
        expect(() => stringCalculator('2,-3,-4')).toThrow('Negative numbers not allowed: -3, -4');
    })

    test('it correctly calculate sum when using delimeter', () => {
        expect(stringCalculator('//;1;2;3')).toBe(6);
        expect(stringCalculator('//!5!10')).toBe(15);
    })

})