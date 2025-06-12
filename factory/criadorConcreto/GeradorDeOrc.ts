// GeradorDeOrc.ts
import { GeradorDeInimigo } from '../criador/GeradorDeInimigo';
import { IInimigo } from '../produto/IInimigo';
import { Orc } from '../produtoConcreto/Orc';

export class GeradorDeOrc extends GeradorDeInimigo {
    public criarInimigo(): IInimigo {
        return new Orc(); // Retorna uma instância de Orc
    }
}