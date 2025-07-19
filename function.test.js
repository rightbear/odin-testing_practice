import { capitalize, reverseString } from './function.js';

describe('Retrieve string with first character capitalized', () => {
  test('String1 with first character lowercase', () => {
    expect(capitalize("supermarket")).toBe("Supermarket");
  });

  test('String2 with first character lowercase', () => {
    expect(capitalize("hypermarket")).toBe("Hypermarket");
  });

  test('String with first character uppercase', () => {
    expect(capitalize("Grocery")).toBe("Grocery");
  });

  test('String with first character numeric', () => {
    expect(capitalize("777Shop")).toBe("777Shop");
  });

  test('String with no character', () => {
    expect(capitalize("")).toBe("");
  });
});

describe('Retrieve string with reversed character order', () => {
  test('String1 with length greater than 1', () => {
    expect(reverseString("chihuahua")).toBe("auhauhihc");
  });

  test('String2 with length greater than 1', () => {
    expect(reverseString("101dalmatians")).toBe("snaitamlad101");
  });

  test('String with length equal to 1', () => {
    expect(reverseString("V")).toBe("V");
  });

  test('String with length equal to 0', () => {
    expect(reverseString("")).toBe("");
  });
});