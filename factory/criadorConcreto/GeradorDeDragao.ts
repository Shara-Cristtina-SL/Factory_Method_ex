// GeradorDeDragao.ts
import { GeradorDeInimigo } from '../criador/GeradorDeInimigo';
import { IInimigo } from '../produto/IInimigo';
import { Dragao } from '../produtoConcreto/Dragao';

export class GeradorDeDragao extends GeradorDeInimigo {
    public criarInimigo(): IInimigo {
        return new Dragao(); // Retorna uma instância de Dragao
    }
}