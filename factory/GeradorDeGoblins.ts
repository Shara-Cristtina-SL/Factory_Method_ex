// GeradorDeGoblin.ts
import { GeradorDeInimigo } from './GeradorDeInimigo';
import { IInimigo } from './IInimigo';
import { Goblin } from './Goblin';

export class GeradorDeGoblin extends GeradorDeInimigo {
    public criarInimigo(): IInimigo {
        return new Goblin(); // Retorna uma instância de Goblin
    }
}