"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Orc = void 0;
var Orc = /** @class */ (function () {
    function Orc() {
    }
    Orc.prototype.atacar = function () {
        console.log("Orc ataca com sua clava!");
    };
    Orc.prototype.defender = function () {
        console.log("Orc se defende com escudo rudimentar.");
    };
    return Orc;
}());
exports.Orc = Orc;
