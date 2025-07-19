export { capitalize, reverseString };

// take a string and returns it with the first character capitalized
function capitalize(testString) {
  
  let result = "";

  if(testString.length > 0) {
    let firstChar = testString.charCodeAt(0);
    if(firstChar >= 97 && firstChar <= 122) {
      firstChar -= 32;
    }

    result += (String.fromCharCode(firstChar) + testString.substring(1));
  }

  return result;
}

// take a string and returns it reversed
function reverseString (testString) {

  let result = "";

  for(let i = testString.length - 1 ; i >= 0 ; i--) {
    result += testString[i];
  }

  return result;
}