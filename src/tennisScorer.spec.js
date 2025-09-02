import { TennisScorer } from "./tennisScorer.js";

describe("TennisScorer", () => {
    it("game empieza con ambos en cero", () => {
        const score = new TennisScorer(); //Arrange - Configurar
        const result = score.showScore(); // Act - ejecutamos
        expect(result).toEqual("Love - Love"); // Assert - verifica un resultado
    });

    it("player 1 anota un punto y el jugador no anota, 1-0", () => {
        const score = new TennisScorer(); //Arrange - Configurar
        score.player1Scores();            // Act - ejecutamos
        expect(score.showScore()).toEqual("15 - Love"); // Assert - verifica un resultado
    });

    it("player 1 anota dos veces y el juegador no anota, 2-0", () => {
        const score = new TennisScorer(); //Arrange - Configurar
        score.player1Scores();            //Arrange - Configurar
        score.player1Scores();            //Arrange - Configurar
        expect(score.showScore()).toEqual("30 - Love");
    });

    it("player 1 anota tres veces y el juegador no anota, 3-0", () => {
        const score = new TennisScorer();
        score.player1Scores();
        score.player1Scores();
        score.player1Scores();
        expect(score.showScore()).toEqual("40 - Love");
    });

    it("player 2 anota su primer punto y el jugador 2 no anota 0 - 1 ", () => {
        const score = new TennisScorer();
        score.player2Scores();
        expect(score.showScore()).toEqual("Love - 15");
    });

    it("player 2 anota dos puntos y el jugador 2 no anota 0 - 2 ", () => {
        const score = new TennisScorer();
        score.player2Scores();
        score.player2Scores();
        expect(score.showScore()).toEqual("Love - 30");
    });

    it("player 2 anota tres puntos y el jugador 2 no anota 0 - 3 ", () => {
        const score = new TennisScorer();
        score.player2Scores();
        score.player2Scores();
        score.player2Scores();
        expect(score.showScore()).toEqual("Love - 40");
    });

    it("player 1 y player 2 anotan 3 puntos los dos 3 - 3 ", () => {
        const score = new TennisScorer();
        score.player1Scores();
        score.player1Scores();
        score.player1Scores();
        score.player2Scores();
        score.player2Scores();
        score.player2Scores();
        expect(score.showScore()).toEqual("Deuce");
    });

    it("estando en Deuce, jugador 1 anota -> Advantage for 1", () => {
        const score = new TennisScorer();
        for (let i = 0; i < 3; i++) {
            score.player1Scores();
            score.player2Scores();
        }
        score.player1Scores(); // rompe el empate
        expect(score.showScore()).toEqual("Advantage for 1");
    });

    it("estando en Deuce, jugador 2 anota -> Advantage for 2", () => {
        const score = new TennisScorer();
        for (let i = 0; i < 3; i++) {
            score.player1Scores();
            score.player2Scores();
        }
        score.player2Scores();
        expect(score.showScore()).toEqual("Advantage for 2");
    });


});