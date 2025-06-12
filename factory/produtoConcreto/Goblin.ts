import { IInimigo } from '../produto/IInimigo';

export class Goblin implements IInimigo {
    atacar(): void {
        console.log("Goblin atira pedras com estilingue!");
    }

    defender(): void {
        console.log("Goblin foge para se esconder.");
    }
}