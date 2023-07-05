function convertToVowels(word) {
    let vowelsOnly = '';
    for (let i = 0; i <= word.length; i++) {
        if (word[i] === 'a' || word[i] === 'e' || word[i] === 'i' || word[i] === 'o' || word[i] === 'u'){
            vowelsOnly = vowelsOnly + word[i];
        }
      }
      return vowelsOnly;
      }
  
const word = 'thisissomeword'
const wordWithOnlyVowels = convertToVowels(word)
console.log(wordWithOnlyVowels) // iioeo
