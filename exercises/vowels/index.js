// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// MY ATTEMPT
// function vowels(str) {
//   let vowel = 0;
//   for (let j = 0; j < str.length; j++) {
//     if (j === 'a' || j === 'e' || j === 'i' || j === 'o' || j === 'a') {
//       vowel += 1;
//     }
//   }
//   return vowel;
// }

// SOLUTION 1
// function vowels(str) {
//   let count = 0;
//   const vowelChecker = ['a', 'e', 'i', 'o', 'u'];
//   for (let char of str.toLowerCase()) {
//     if (vowelChecker.includes(char)) {
//       count++;
//     }
//   }
//   return count;
// }

// SOLUTION 2: RegEx
function vowels(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

module.exports = vowels;
