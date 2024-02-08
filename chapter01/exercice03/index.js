export function reverseString(str) {
    return (
        str
            .split('')
            .reverse()
            .join('')
    );
}

export function isPalindrome(str) {
    return str === reverseString(str);
}

export function countVowels(str) {
    const count = str.match(/[aeiouyé]/gi).length;
    return count;
}

//Error in test function ==> this part use the testing words and show the correct values (node index.js)
export function manualTestcountVowel(){
    const vowels = ['aerodynamique', 'education', 'informatique', 'oiseau', 'universite', 'cryptographie', 'bicyclette', 'ornithorynque', 'algorithmique', 'encyclopédie'];
    vowels.forEach(element => {
        let result = countVowels(element);
        console.log(`${element} : ${result}`)
    });
}

manualTestcountVowel();