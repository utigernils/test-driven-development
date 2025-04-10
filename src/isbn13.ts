export function isValid(isbn13: number): boolean {
  if (typeof isbn13 !== "number" || !Number.isInteger(isbn13) || isbn13 <= 0) {
    throw new Error("Invalid input type");
  }

  const isbnStr = isbn13.toString();
  if (isbnStr.length !== 13) {
    throw new Error("ISBN-13 must be a 13-digit number");
  }

  const digits = isbnStr.split("").map(Number);
  const checksum = digits.reduce((sum, digit, index) => {
    return sum + digit * (index % 2 === 0 ? 1 : 3);
  }, 0);

  return checksum % 10 === 0;
}
