import { play } from "./rock-paper-scissors";

describe("play function", () => {
    const testCases = [
        { player1: "rock", player2: "scissors", expected: 1 },
        { player1: "scissors", player2: "paper", expected: 1 },
        { player1: "paper", player2: "rock", expected: 1 },
        { player1: "scissors", player2: "rock", expected: 2 },
        { player1: "paper", player2: "scissors", expected: 2 },
        { player1: "rock", player2: "paper", expected: 2 },
        { player1: "rock", player2: "rock", expected: 0 },
        { player1: "scissors", player2: "scissors", expected: 0 },
        { player1: "paper", player2: "paper", expected: 0 },
    ];

    const invalidMoves = [
        { player1: "invalid", player2: "rock" },
        { player1: "rock", player2: "invalid" },
        { player1: "invalid", player2: "invalid" },
        { player1: "", player2: "rock" },
        { player1: "rock", player2: "" },
        { player1: " ", player2: "rock" },
    ];

    test.each(testCases)(
        "returns $expected when player1 plays '$player1' and player2 plays '$player2'",
        ({ player1, player2, expected }) => {
            expect(play(player1, player2)).toBe(expected);
        }
    );

    test.each(invalidMoves)(
        "throws an error for invalid moves: player1='$player1', player2='$player2'",
        ({ player1, player2 }) => {
            expect(() => play(player1, player2)).toThrow("Invalid move");
        }
    );

    test("ignores case and trims whitespace", () => {
        expect(play(" Rock ", "scissors")).toBe(1);
        expect(play("PAPER", " rock ")).toBe(1);
        expect(play(" Scissors ", " PAPER ")).toBe(1);
    });
});