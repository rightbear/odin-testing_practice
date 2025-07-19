import Big from "big.js"
export { capitalize, reverseString, calculator };

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
function reverseString(testString) {

  let result = "";

  for(let i = testString.length - 1 ; i >= 0 ; i--) {
    result += testString[i];
  }

  return result;
}

// take two numbers and return the object with functions and correct calculation
function calculator(num1, num2) {
  Big.RM = Big.roundHalfEven;

  const bigNum1 = new Big(num1);
  const bigNum2 = new Big(num2);

  let sum = +(bigNum1.plus(bigNum2)).round(2);
  sum = sum === 0 ? 0 : sum;  // prevent -0 is not equal to +0 in toBe and toEqual

  let diff = +(bigNum1.sub(bigNum2)).round(2);
  diff = diff === 0 ? 0 : diff;

  let division = num2 === 0 ? NaN : +(bigNum1.div(bigNum2)).round(2);
  division = division === 0 ? 0 : division;

  let product = +(bigNum1.times(bigNum2)).round(2);
  product = product === 0 ? 0 : product;

  let result= {
    add: sum,
    subtract: diff,
    divide: division,
    multiply: product
  }

  return result;
}