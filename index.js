function isPalindrome(word) {
  const cleanedWord = word.replace(/ /g, '').toLowerCase();

  return cleanedWord === cleanedWord.split('').reverse().join('');
}

/* 
Pseudocode:

1. Remove spaces from the input word.
2. Convert the input word to lowercase.
3. Check if the cleaned word is equal to its reverse.
4. If they are equal, return true (it's a palindrome).
5. If they are not equal, return false (it's not a palindrome).

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
