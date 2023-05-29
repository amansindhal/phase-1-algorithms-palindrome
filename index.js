function isPalindrome(str) {
  let reg = /[\W_ ]/g; 
  let smallStr = str.toLowerCase().replace(reg, ""); 
  let reversed = smallStr.split("").reverse().join(""); 
  if (reversed === smallStr) {
    return true;
  } else {
    return false;
  }
}
module.exports = isPalindrome;
console.log(isPalindrome("aman"))