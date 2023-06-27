function isPalindrome(word) {
  // Write your algorithm here
  const compare = word.split('').reverse('').join('')
    return word === compare
}

/* 
  Add your pseudocode here
  split the string to an array
  reverse the array 
  join the array 
  compare the joined array with the main string
*/

/*
  Add written explanation of your solution here

  if raversed string is equal to the original array return true else fale
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log(isPalindrome("abba"));
  console.log(isPalindrome("a"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
  console.log(isPalindrome("ab"));
}

module.exports = isPalindrome;
