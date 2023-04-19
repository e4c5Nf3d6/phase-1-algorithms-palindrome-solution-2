function isPalindrome(word) {
  for (let i = 0; i < word.length / 2; i++) {
    const j = word.length - 1 - i;
    if (word[i] !== word[j]) {
      return false;
    }
  }

  return true;
}

/* 
iterate over the letters in the string starting from the beginning and ending at the middle
  compare the current letter with the letter the same distance from the end of the string as the current letter is from the beginng
    if the letters do not match, return false

if the middle of the string is reached and all letters have matched, return true
*/

/*
  isPalindrome returns true if the input string is the same forward and backwards and false if it is not.
  If the first letter is the same as the last, the second letter is the same as the second to last, and this patters hold until the middle of the word, the word is the same forwards and backwards.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));
  
  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("loop"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("noon"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("yo"));
}

module.exports = isPalindrome;
