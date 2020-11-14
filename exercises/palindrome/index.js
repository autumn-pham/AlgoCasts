// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// MY ATTEMPT
// function palindrome(str) {
//   let reversed = '';
//   // HOW DO I MAKE THIS BOOLEAN TRUE OR FALSE
//   let isReversed =
//   for (let character of str) {
//     reversed = character + reversed;
//   }
//   if str === reversed {
//     isReversed === true
//   } else {
//     isReversed === false
//   }
// }

// SOLUTION
function palindrome(str) {
  const reversed = str.split('').reverse().join('');
  return str === reversed;
}

// ALT SOLUTION
// function palindrome(str) {
//   return string.split('').every((char, i) => {
//     return char === str[str.length - i - 1];
//   });
// }

module.exports = palindrome;
