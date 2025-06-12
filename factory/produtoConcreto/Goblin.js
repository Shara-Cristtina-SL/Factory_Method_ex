"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Goblin = void 0;
var Goblin = /** @class */ (function () {
    function Goblin() {
    }
    Goblin.prototype.atacar = function () {
        console.log("Goblin atira pedras com estilingue!");
    };
    Goblin.prototype.defender = function () {
        console.log("Goblin foge para se esconder.");
    };
    return Goblin;
}());
exports.Goblin = Goblin;
