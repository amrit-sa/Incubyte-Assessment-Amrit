import stringCalculator from "../app";

describe('stringCalculator' , () => {
    test('it handles empty string', () => {
        expect(stringCalculator('')).toBe(0);
    })
})