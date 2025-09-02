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
});