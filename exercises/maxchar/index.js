// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// MY ATTEMPT
// function maxChar(str) {
//   let maxChar = '';
//   str.split('').forEach(function(char){
//     char = str.split(char).length;
//     maxChar = char;
//     return maxChar;
//   })
// }

// SOLUTION
function maxChar(str) {
  const charMap = {};
  let max = 0;
  let maxChar = '';
  for (let char of str) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }
  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }
  return maxChar;
}

// to make the object can also do
// for (let char of str) {
//   charMap[char] = charMap[char] + 1 || 1;
// }

module.exports = maxChar;
