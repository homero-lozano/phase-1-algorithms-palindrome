function isPalindrome(s) {
// Step 1: Reverse the string 
let reversedString = s.split('').reverse().join('');
// Step 2: Check if the original string is equal to the reversed one
return s === reversedString; 
  // Write your algorithm here
}

/* 
1. Define a function isPalindrome that takes s single string s as an argument 
2. Reverse the string s and store the result 
3. Compare the original string s with the reversed versions
4. If they are equal return true (it's a palindrome)
5. Otherwise return false (it's not a palindrome)

Add your pseudocode here
*/

/*
  Add written explanation of your solution here

The function splits the input string into an array of 
characters reverses the array, and joins the characters 
back into a string. It then compares the reversed string 
with the original string and returns true if they are equal, 
and false otherwise! 

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {

  // my custom tests 
  console.log("madam")
  console.log("robot")
  console.log("racecar")
  console.log("a")
  console.log("hello")
 
 
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
