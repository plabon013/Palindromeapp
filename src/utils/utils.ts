//
// isPalindrome
// Reverses the formatted input and returns true if it matches the formatted phrase
// Otherwise, returns false
export const isPalindrome = (phrase: string): boolean => {
    const formatted = formatPhrase(phrase);
    return formatted === formatted.split('').reverse().join('');
}

//
// formatPhrase
// Normalizes and removes any numeric, special characters, or whitespace
// Returns the cleaned phrase in lowercase
export const formatPhrase = (phrase: string): string => {
    return phrase.normalize("NFD").replace(/[^a-zA-Z]/g, '').toLowerCase();
}  
