// Jogo.ts
import { GeradorDeInimigo } from '../criador/GeradorDeInimigo';
import { GeradorDeOrc } from '../criadorConcreto/GeradorDeOrc';
import { GeradorDeGoblin } from '../criadorConcreto/GeradorDeGoblin';
import { GeradorDeDragao } from '../criadorConcreto/GeradorDeDragao';

class Jogo {
    public static main(): void {
        console.log("--- Jogo Iniciado ---");

        // Cria um gerador de Orcs e inicia um combate
        const gerador1: GeradorDeInimigo = new GeradorDeOrc();
        gerador1.iniciarCombate();

        // Cria um gerador de Goblins e inicia um combate
        const gerador2: GeradorDeInimigo = new GeradorDeGoblin();
        gerador2.iniciarCombate();

        // Cria um gerador de Dragões e inicia um combate
        const gerador3: GeradorDeInimigo = new GeradorDeDragao();
        gerador3.iniciarCombate();

        console.log("--- Jogo Encerrado ---");

        // A grande vantagem: Se precisarmos adicionar um novo inimigo (ex: Esqueleto),
        // basta criar a classe Esqueleto e um GeradorDeEsqueleto.
        // NENHUMA alteração na lógica da função criarInimigo!
        /*A alteração em Jogo.ts para instanciar GeradorDeEsqueleto é uma adição de funcionalidade, 
        não uma modificação de funcionalidade existente.*/
    }
}

// Executa o método principal
Jogo.main();