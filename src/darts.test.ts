import { calcPoints, possibleCheckout } from "./darts";

describe("calcPoints function", () => {
  const validThrows = [
    { input: "3 20 1 17 2 4", expected: 85 },  
    { input: "2 15 1 18 3 19", expected: 105 }, 
    { input: "3 20 1 5", expected: 65 },         
    { input: "1 20 1 20 1 20", expected: 60 },  
    { input: "2 25", expected: 50 },            
    { input: "3 20", expected: 60 },           
  ];

  const invalidThrows = [
    { input: "3" },                   
    { input: "4 20" },               
    { input: "1 21" },               
    { input: "2 20 3" },              
    { input: "a 20" },                 
    { input: "" },                     
  ];

  test.each(validThrows)(
    "calculates $expected points for throws '$input'",
    ({ input, expected }) => {
      expect(calcPoints(input)).toBe(expected);
    }
  );

  test.each(invalidThrows)(
    "throws an error for invalid throw input: '$input'",
    ({ input }) => {
      expect(() => calcPoints(input)).toThrow("Invalid throw input");
    }
  );

  test("ignores extra whitespace between numbers", () => {
    expect(calcPoints("  3   20  1   17  2  4  ")).toBe(85);
  });
});

describe("possibleCheckout function", () => {
  const validCheckouts = [
    { points: 477, expected: "Double 12" },  
    { points: 483, expected: "Double 9" },    
    { points: 461, expected: "Double 20" },   
    { points: 500, expected: "Double 0.5" },   
  ];

  const impossibleCheckouts = [
    { points: 480 },                        
    { points: 441 },                          
    { points: 502 },                        
    { points: 501 },                        
    { points: 0 },                          
  ];

  test.each(validCheckouts)(
    "returns '$expected' when $points points scored",
    ({ points, expected }) => {
      expect(possibleCheckout(points)).toBe(expected);
    }
  );

  test.each(impossibleCheckouts)(
    "returns null when no checkout possible for $points points",
    ({ points }) => {
      expect(possibleCheckout(points)).toBeNull();
    }
  );

  test("throws error for negative points", () => {
    expect(() => possibleCheckout(-1)).toThrow("Points cannot be negative");
  });
});