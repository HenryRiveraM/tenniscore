import { TennisScorer } from "./tennisScorer.js";

describe("TennisScorer", () => {
    it("game empieza con ambos en cero", () => {
        const score = new TennisScorer();
        expect(score.showScore()).toEqual("Love - Love");
    });

    it("player 1 anota un punto y el jugador no anota, 1-0", () => {
        const score = new TennisScorer();
        score.player1Scores();
        expect(score.showScore()).toEqual("15 - Love");
    });

    it("player 1 anota dos veces y el juegador no anota, 2-0", () => {
        const score = new TennisScorer();
        score.player1Scores();
        score.player1Scores();
        expect(score.showScore()).toEqual("30 - Love");
    });

    it("player 1 anota tres veces y el juegador no anota, 3-0", () => {
        const score = new TennisScorer();
        score.player1Scores();
        score.player1Scores();
        score.player1Scores();
        expect(score.showScore()).toEqual("40 - Love");
    });
});