import Big from "big.js";
export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };

// take a string and returns it with the first character capitalized
function capitalize(testString) {
  let result = "";

  if (testString.length > 0) {
    let firstChar = testString.charCodeAt(0);
    if (firstChar >= 97 && firstChar <= 122) {
      firstChar -= 32;
    }

    result += String.fromCharCode(firstChar) + testString.substring(1);
  }

  return result;
}

// take a string and returns it reversed
function reverseString(testString) {
  let result = "";

  for (let i = testString.length - 1; i >= 0; i--) {
    result += testString[i];
  }

  return result;
}

// take two numbers and return the object with functions and correct calculation
function calculator(num1, num2) {
  Big.RM = Big.roundHalfEven;

  const bigNum1 = new Big(num1);
  const bigNum2 = new Big(num2);

  let sum = +bigNum1.plus(bigNum2).round(2);
  sum = sum === 0 ? 0 : sum; // prevent -0 is not equal to +0 in toBe and toEqual

  let diff = +bigNum1.sub(bigNum2).round(2);
  diff = diff === 0 ? 0 : diff;

  let division = num2 === 0 ? NaN : +bigNum1.div(bigNum2).round(2);
  division = division === 0 ? 0 : division;

  let product = +bigNum1.times(bigNum2).round(2);
  product = product === 0 ? 0 : product;

  let result = {
    add: sum,
    subtract: diff,
    divide: division,
    multiply: product,
  };

  return result;
}

// take a string and a shift factor and returns it with each character “shifted”
function caesarCipher(testString, factor) {
  let result = "";

  for (let i = 0; i <= testString.length - 1; i++) {
    result += shiftChar(testString.charCodeAt(i), factor);
  }

  return result;
}

// shift alphabetical characters
function shiftChar(testCharCode, factor) {
  // charactor is a to z
  if (testCharCode >= 97 && testCharCode <= 122) {
    testCharCode = ((testCharCode - 97 + factor) % 26) + 97;
  }

  // charactor is A to Z
  if (testCharCode >= 65 && testCharCode <= 90) {
    testCharCode = ((testCharCode - 65 + factor) % 26) + 65;
  }

  return String.fromCharCode(testCharCode);
}

// take an array of numbers and the object with functions and correct calculation
function analyzeArray(testArray) {
  Big.RM = Big.roundHalfEven;

  let size = testArray.length;

  let bigSum = NaN,
    bigMin = NaN,
    bigMax = NaN,
    bigAvg = NaN;

  if (size > 0) {
    let minNum, maxNum;
    ((bigSum = new Big(0)), (minNum = testArray[0]), (maxNum = testArray[0]));

    testArray.forEach((element) => {
      if (element < minNum) {
        minNum = element;
      }

      if (element > maxNum) {
        maxNum = element;
      }

      bigSum = bigSum.plus(element);
    });

    bigAvg = +bigSum.div(size).round(2);
    bigAvg = bigAvg === 0 ? 0 : bigAvg; // prevent -0 is not equal to +0 in toBe and toEqual

    bigMin = +new Big(minNum).round(2);
    bigMin = bigMin === 0 ? 0 : bigMin;

    bigMax = +new Big(maxNum).round(2);
    bigMax = bigMax === 0 ? 0 : bigMax;
  }

  let result = {
    average: bigAvg,
    min: bigMin,
    max: bigMax,
    length: size,
  };

  return result;
}
