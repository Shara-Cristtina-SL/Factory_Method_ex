import { IInimigo } from './IInimigo';

export class Dragao implements IInimigo {
    atacar(): void {
        console.log("Dragão cospe fogo ardente!");
    }

    defender(): void {
        console.log("Dragão voa para longe, desviando.");
    }
}