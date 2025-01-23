export const generateErrorLog = (negativeNumbers) => {
    return `Negative numbers not allowed: ${negativeNumbers.join(', ')}`
}

export const generateInvalidCharsError = (invalidCharacters) => {
    return `Invalid characters found:${invalidCharacters.join(',')}`
}