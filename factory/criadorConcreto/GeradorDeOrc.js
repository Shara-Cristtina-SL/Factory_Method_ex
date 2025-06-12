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
exports.GeradorDeOrc = void 0;
// GeradorDeOrc.ts
var GeradorDeInimigo_1 = require("../criador/GeradorDeInimigo");
var Orc_1 = require("../produtoConcreto/Orc");
var GeradorDeOrc = /** @class */ (function (_super) {
    __extends(GeradorDeOrc, _super);
    function GeradorDeOrc() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GeradorDeOrc.prototype.criarInimigo = function () {
        return new Orc_1.Orc(); // Retorna uma instância de Orc
    };
    return GeradorDeOrc;
}(GeradorDeInimigo_1.GeradorDeInimigo));
exports.GeradorDeOrc = GeradorDeOrc;
