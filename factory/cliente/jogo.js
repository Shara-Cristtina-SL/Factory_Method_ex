"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GeradorDeOrc_1 = require("../criadorConcreto/GeradorDeOrc");
var GeradorDeGoblin_1 = require("../criadorConcreto/GeradorDeGoblin");
var GeradorDeDragao_1 = require("../criadorConcreto/GeradorDeDragao");
var Jogo = /** @class */ (function () {
    function Jogo() {
    }
    Jogo.main = function () {
        console.log("--- Jogo Iniciado ---");
        // Cria um gerador de Orcs e inicia um combate
        var gerador1 = new GeradorDeOrc_1.GeradorDeOrc();
        gerador1.iniciarCombate();
        // Cria um gerador de Goblins e inicia um combate
        var gerador2 = new GeradorDeGoblin_1.GeradorDeGoblin();
        gerador2.iniciarCombate();
        // Cria um gerador de Dragões e inicia um combate
        var gerador3 = new GeradorDeDragao_1.GeradorDeDragao();
        gerador3.iniciarCombate();
        console.log("--- Jogo Encerrado ---");
        // A grande vantagem: Se precisarmos adicionar um novo inimigo (ex: Esqueleto),
        // basta criar a classe Esqueleto e um GeradorDeEsqueleto.
        // NENHUMA alteração na lógica da função criarInimigo!
        /*A alteração em Jogo.ts para instanciar GeradorDeEsqueleto é uma adição de funcionalidade,
        não uma modificação de funcionalidade existente.*/
    };
    return Jogo;
}());
// Executa o método principal
Jogo.main();
