

function isPalindrome(word) {
    let reversedWord = "";
    for (let i = word.length - 1; i >= 0; i--) {
        reversedWord = reversedWord + word[i];
    }

    if (reversedWord == word){
        return true;
    } else {
        return false;
    }
}
      
const word = 'racecar'
if (isPalindrome(word)) {
    console.log(word + ' is a palindrome!')
} else {
    console.log(word + ' is not a palindrome!')
}

const trial = 'wassup'
if (isPalindrome(trial)) {
    console.log(trial + ' is a palindrome!')
} else {
    console.log(trial + ' is not a palindrome!')
}