// GeradorDeInimigo.ts
import { IInimigo } from './IInimigo';

export abstract class GeradorDeInimigo {
    // O Factory Method: as subclasses implementarão este método para criar um inimigo específico.
    public abstract criarInimigo(): IInimigo;

    // Este é um método de "negócios" que usa o inimigo criado pelo Factory Method.
    public iniciarCombate(): void {
        const inimigo: IInimigo = this.criarInimigo(); // Usa o Factory Method
        console.log("Um novo inimigo aparece!");
        inimigo.atacar();
        inimigo.defender();
        console.log("Fim do combate.\n");
    }
}