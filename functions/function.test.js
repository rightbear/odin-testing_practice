import { describe, expect, test } from "@jest/globals";
import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from "./function.js";

// TDD for capitalize()
describe("Retrieve string with first character capitalized", () => {
  test("String1 with first character lowercase", () => {
    expect(capitalize("supermarket")).toBe("Supermarket");
  });

  test("String2 with first character lowercase", () => {
    expect(capitalize("hypermarket")).toBe("Hypermarket");
  });

  test("String with first character uppercase", () => {
    expect(capitalize("Grocery")).toBe("Grocery");
  });

  test("String with first character numeric", () => {
    expect(capitalize("777Shop")).toBe("777Shop");
  });

  test("String with no character", () => {
    expect(capitalize("")).toBe("");
  });
});

// TDD for reverseString()
describe("Retrieve string with reversed character order", () => {
  test("String1 with length greater than 1", () => {
    expect(reverseString("chihuahua")).toBe("auhauhihc");
  });

  test("String2 with length greater than 1", () => {
    expect(reverseString("101dalmatians")).toBe("snaitamlad101");
  });

  test("String with length equal to 1", () => {
    expect(reverseString("V")).toBe("V");
  });

  test("String with length equal to 0", () => {
    expect(reverseString("")).toBe("");
  });
});

// TDD for calculator()
describe("Retrieve object with correct calculation of two numbers", () => {
  test("Number set1 with two positive nonzero int", () => {
    expect(calculator(10, 5)).toEqual({
      add: 15,
      subtract: 5,
      divide: 2,
      multiply: 50,
    });
  });

  test("Number set2 with two positive nonzero int", () => {
    expect(calculator(8, 3)).toEqual({
      add: 11,
      subtract: 5,
      divide: 2.67,
      multiply: 24,
    });
  });

  test("Number set with two positive nonzero float", () => {
    expect(calculator(0.2, 0.1)).toEqual({
      add: 0.3,
      subtract: 0.1,
      divide: 2,
      multiply: 0.02,
    });
  });

  test("Number set with one nonzero float and one zero", () => {
    expect(calculator(10.075, 0)).toEqual({
      add: 10.08,
      subtract: 10.08,
      divide: NaN,
      multiply: 0,
    });
  });

  test("Number set with two negative nonzero int", () => {
    expect(calculator(-10, -5)).toEqual({
      add: -15,
      subtract: -5,
      divide: 2,
      multiply: 50,
    });
  });

  test("Number set with two negative nonzero float", () => {
    expect(calculator(-0.2, -0.1)).toEqual({
      add: -0.3,
      subtract: -0.1,
      divide: 2,
      multiply: 0.02,
    });
  });

  test("Number set with one negative float and one zero", () => {
    expect(calculator(-10.075, 0)).toEqual({
      add: -10.08,
      subtract: -10.08,
      divide: NaN,
      multiply: 0,
    });
  });
});

// TDD for caesarCipher()
describe("Retrieve string with each character shifted", () => {
  test("String with all alphabetical character lowercase", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
  });

  test("String with all alphabetical characters uppercase", () => {
    expect(caesarCipher("EVA", 5)).toBe("JAF");
  });

  test("String with alphabetical characters both lettercases", () => {
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
  });

  test("String with alphabetical and non-alphabetical characters", () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
  });
});

// TDD for analyzeArray()
describe("Retrieve object with correct calculation of array", () => {
  test("Number set1 with more than 1 interger numbers", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    });
  });

  test("Number set2 with more than 1 interger numbers", () => {
    expect(analyzeArray([7, 2, 15, 11, 31, 23, 8])).toEqual({
      average: 13.86,
      min: 2,
      max: 31,
      length: 7,
    });
  });

  test("Number set with more than 1 float numbers", () => {
    expect(analyzeArray([1.1, -0.8, 3.5, 9.4, -2.9])).toEqual({
      average: 2.06,
      min: -2.9,
      max: 9.4,
      length: 5,
    });
  });

  test("Number set1 with only 1 interger number", () => {
    expect(analyzeArray([8])).toEqual({
      average: 8,
      min: 8,
      max: 8,
      length: 1,
    });
  });

  test("Number set2 with only 1 interger number", () => {
    expect(analyzeArray([-0])).toEqual({
      average: 0,
      min: 0,
      max: 0,
      length: 1,
    });
  });

  test("Number set with only 1 float number", () => {
    expect(analyzeArray([-0.654562])).toEqual({
      average: -0.65,
      min: -0.65,
      max: -0.65,
      length: 1,
    });
  });

  test("Number set with no number", () => {
    expect(analyzeArray([])).toEqual({
      average: NaN,
      min: NaN,
      max: NaN,
      length: 0,
    });
  });
});
