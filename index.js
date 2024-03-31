function isPalindrome(word) {
  return word === word.split("").reverse().join("");
}

/* 
  Add your pseudocode here

  Function isPalindrome(word):
    set reverseWord to the reverse of word

    If word equals reverseWord then,
      return true
    Else
      return false
    End if
  end function
*/

/*
  Add written explanation of your solution here:

The provided pseudocode outlines a function named isPalindrome designed to determine whether a given word is a palindrome. To accomplish this, the function first reverses the input word and stores it in a variable named reversedWord. Subsequently, it compares the original word with its reversed counterpart (reversedWord). If the two versions match exactly, indicating symmetry, the function concludes that the word is indeed a palindrome and returns true. Conversely, if the comparison yields no match, suggesting a lack of symmetry, the function returns false, indicating that the word is not a palindrome. This approach provides a straightforward method for assessing palindrome status based on a comparison between a word and its reverse.

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
