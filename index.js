function isPalindrome(word) {
 
  const arrayValues = word.split("");
  const reverseArrayValues = arrayValues.reverse();
  const reverseString = reverseArrayValues.join("");

 
  if (word == reverseString) {
    return true;
  } else {
    return false;
  }
}


if (require.main === module) {
 
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;