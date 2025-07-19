import { capitalize } from './function.js';

describe('String with first character capitalized', () => {
  test('Check Supermarket', () => {
    expect(capitalize("supermarket")).toBe("Supermarket");
  });

  test('Check Hypermarket', () => {
    expect(capitalize("hypermarket")).toBe("Hypermarket");
  });

  test('check Grocery', () => {
    expect(capitalize("Grocery")).toBe("Grocery");
  });

  test('check 777Shop', () => {
    expect(capitalize("777Shop")).toBe("777Shop");
  });

  test('check none', () => {
    expect(capitalize("")).toBe("");
  });
});