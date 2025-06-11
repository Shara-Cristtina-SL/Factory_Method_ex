// GeradorDeDragao.ts
import { GeradorDeInimigo } from './GeradorDeInimigo';
import { IInimigo } from './IInimigo';
import { Dragao } from './Dragao';

export class GeradorDeDragao extends GeradorDeInimigo {
    public criarInimigo(): IInimigo {
        return new Dragao(); // Retorna uma instância de Dragao
    }
}