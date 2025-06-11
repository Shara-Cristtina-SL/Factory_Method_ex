// GeradorDeOrc.ts
import { GeradorDeInimigo } from './GeradorDeInimigo';
import { IInimigo } from './IInimigo';
import { Orc } from './Orc';

export class GeradorDeOrc extends GeradorDeInimigo {
    public criarInimigo(): IInimigo {
        return new Orc(); // Retorna uma instância de Orc
    }
}