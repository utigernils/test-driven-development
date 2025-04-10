import { isValid } from "./isbn13";

describe("isValid function", () => {
  describe("Valid ISBN-13 numbers", () => {
    const validISBNs = [
      9780306406157,
      9781861972712,
      9783161484100,
      9780439023481,
      9781451648546,
      9780261103573,
      9780590353427,
      9780747532743,
      9780143127741,
      9780385472579,
    ];

    validISBNs.forEach((isbn) => {
      it(`should return true for valid ISBN ${isbn}`, () => {
        expect(isValid(isbn)).toBe(true);
      });
    });
  });

  describe("Invalid ISBN-13 numbers", () => {
    const invalidISBNs = [
      9780306406158,
      9781861972713,
      9783161484103,
      9780439023480,
      9781451648543,
      9780261103571,
      9780590353429,
      9780747532741,
      9780143127742,
      9780385472570,
    ];

    invalidISBNs.forEach((isbn) => {
      it(`should return false for invalid ISBN ${isbn}`, () => {
        expect(isValid(isbn)).toBe(false);
      });
    });
  });

  describe("Invalid input types", () => {
    const invalidInputs = [
      { input: "9780306406157a", description: "string with letters" },
      { input: 978030640615, description: "number that's too short" },
      { input: "9780306406157", description: "string instead of number" },
      { input: "978030640615X", description: "string with invalid character" },
      { input: -9780306406157, description: "negative number" },
      { input: 9780306406157.5, description: "float number" },
      { input: null, description: "null" },
      { input: undefined, description: "undefined" },
      { input: {}, description: "object" },
    ];

    invalidInputs.forEach(({ input, description }) => {
      it(`should throw error for ${description}`, () => {
        expect(() => isValid(input as any)).toThrow();
      });
    });
  });

});