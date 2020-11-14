// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//   // turn string into an array
//   // reverse items in the array
//   // turn array back into a string
//   return str.split('').reverse().join('');
// }
//
// // ALT SOLUTION
// function reverse(str) {
//   let reversed = '';
//   for (let character of str) {
//     reversed = character + reversed;
//   }
// }

// ALT SOLUTION - MORE COMPLICATED
function reverse(str) {
  return str.split('').reduce((reversed, character) => {
    return character + reversed;
  }, '');
}

module.exports = reverse;
