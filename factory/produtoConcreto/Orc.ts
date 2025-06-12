// Orc.ts
import { IInimigo } from '../produto/IInimigo';

export class Orc implements IInimigo {
    atacar(): void {
        console.log("Orc ataca com sua clava!");
    }

    defender(): void {
        console.log("Orc se defende com escudo rudimentar.");
    }
}
