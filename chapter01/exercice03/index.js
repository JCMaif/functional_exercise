export function reverseString(str) {
    return (
        str
        .toString()
        .split(',')
        .reverse()
        .join('')
    );
}

export function isPalindrome(str) {
    return str === reverseString(str);
}

export function countVowels(str) {
    const vowelsArray = ['a','e','i','o','u'];
    
}
