"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeradorDeGoblin = void 0;
// GeradorDeGoblin.ts
var GeradorDeInimigo_1 = require("../criador/GeradorDeInimigo");
var Goblin_1 = require("../produtoConcreto/Goblin");
var GeradorDeGoblin = /** @class */ (function (_super) {
    __extends(GeradorDeGoblin, _super);
    function GeradorDeGoblin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GeradorDeGoblin.prototype.criarInimigo = function () {
        return new Goblin_1.Goblin(); // Retorna uma instância de Goblin
    };
    return GeradorDeGoblin;
}(GeradorDeInimigo_1.GeradorDeInimigo));
exports.GeradorDeGoblin = GeradorDeGoblin;
