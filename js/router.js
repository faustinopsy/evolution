import {Home} from './paginas/home.js';
import {Contato} from './paginas/contato.js';
export class Router {
    constructor() {
        this.rotas = {
            '#home': new Home(),
            '#contato': new Contato(),
        };

        window.addEventListener('load', this.navegar.bind(this));
        window.addEventListener('hashchange', this.navegar.bind(this));
    }

    navegar() {
        const divConteudo = document.getElementById('conteudo');
        const hash = window.location.hash;

        const pagina = this.rotas[hash] || this.rotas['#home'];
        divConteudo.innerHTML = pagina.carregar();
    }

}