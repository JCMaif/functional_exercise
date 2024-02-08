export function sum(a, b) {
    return a + b ;
}

export function isGreaterThan(input, comp) {
    return input > comp ? true : false;
}

export function reverseNumber(num) {
    return (
        parseFloat(
            num
            .toString()
            .split('')
            .reverse()
            .join('')
        )
    );
    
}
