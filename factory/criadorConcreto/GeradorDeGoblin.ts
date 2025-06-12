// GeradorDeGoblin.ts
import { GeradorDeInimigo } from '../criador/GeradorDeInimigo';
import { IInimigo } from '../produto/IInimigo';
import { Goblin } from '../produtoConcreto/Goblin';

export class GeradorDeGoblin extends GeradorDeInimigo {
    public criarInimigo(): IInimigo {
        return new Goblin(); // Retorna uma instância de Goblin
    }
}