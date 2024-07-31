import {carregaNav} from './navbar.js';
import {carregaHome} from './home.js'
import {carregaContato} from './contato.js'

const rotas = {
    '#home':  carregaHome,
    '#contato':  carregaContato,
};

function navegar() {
    const divConteudo = document.getElementById('conteudo');
    const hash = window.location.hash;

    
    const pagina = rotas[hash] || rotas['#home'];
    divConteudo.innerHTML = pagina();
}

function carregaEventos(){
    document.getElementById('home-link').addEventListener('click', () => {
        window.location.hash = '#home';
        navegar();
    });
    
    document.getElementById('contato-link').addEventListener('click', () => {
        window.location.hash = '#contact';
        navegar();
    });
}

carregaNav()
carregaEventos()

window.addEventListener('load', navegar);
window.addEventListener('hashchange', navegar);

