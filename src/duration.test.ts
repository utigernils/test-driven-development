import { formatDuration } from "./duration";

describe("formatDuration function", () => {
    test("formats seconds correctly", () => {
        expect(formatDuration(33)).toBe("33s");
    });

    test("formats minutes and seconds correctly", () => {
        expect(formatDuration(123)).toBe("2m3s");
        expect(formatDuration(500)).toBe("8m20s");
    });

    test("formats hours correctly", () => {
        expect(formatDuration(3600)).toBe("1h");
        expect(formatDuration(3999)).toBe("1h6m39s");
    });

    test("handles zero seconds", () => {
        expect(formatDuration(0)).toBe("0s");
    });

    test("throws an error for negative durations", () => {
        expect(() => formatDuration(-1)).toThrow("Duration cannot be negative");
    });

    test("rounds fractional seconds", () => {
        expect(formatDuration(33.7)).toBe("34s");
        expect(formatDuration(123.4)).toBe("2m3s");
    });
});
