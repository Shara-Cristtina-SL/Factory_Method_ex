"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeradorDeInimigo = void 0;
var GeradorDeInimigo = /** @class */ (function () {
    function GeradorDeInimigo() {
    }
    // Este é um método de "negócios" que usa o inimigo criado pelo Factory Method.
    GeradorDeInimigo.prototype.iniciarCombate = function () {
        var inimigo = this.criarInimigo(); // Usa o Factory Method
        console.log("Um novo inimigo aparece!");
        inimigo.atacar();
        inimigo.defender();
        console.log("Fim do combate.\n");
    };
    return GeradorDeInimigo;
}());
exports.GeradorDeInimigo = GeradorDeInimigo;
