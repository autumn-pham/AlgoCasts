// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// MY ATTEMPT
// function anagrams(stringA, stringB) {
//   const string1 = stringA.replace(/[^\w]/g, "").toLowerCase();
//   const string2 = stringB.replace(/[^\w]/g, "").toLowerCase();
//   const string1Map = {};
//   const string2Map = {};
//   for (let char of string1) {
//     if (string1Map[char]) {
//       string1Map[char]++;
//     } else {
//       string1Map[char] = 1;
//     }
//   }
//   for (let ch of string2) {
//     if (string2Map[ch]) {
//       string2Map[ch]++;
//     } else {
//       string2Map[ch] = 1;
//     }
//   }
// }

// SOLUTION 1
// function anagrams(stringA, stringB) {
//   const aCharMap = buildCharMap(stringA);
//   const bCharMap = buildCharMap(stringB);
//   if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//     return false;
//   }
//   for (let char in aCharMap) {
//     if (aCharMap[char] !== bCharMap[char]) {
//       return false;
//     }
//   }
//   return true;
// }
// // helper function to build charMap
// function buildCharMap(str) {
//   const charMap = {};
//   for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
//     charMap[char] = charMap[char] + 1 || 1;
//   }
//   return charMap;
// }


// SOLUTION 2
function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

module.exports = anagrams;
