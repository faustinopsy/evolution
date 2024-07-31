import {carregaNav} from './navbar.js';
import {carregaHome} from './home.js'
import {carregaContato} from './contato.js'

function navegar() {
    const divConteudo = document.getElementById('conteudo');
    const hash = window.location.hash;

    if (hash === '#contato') {
        divConteudo.innerHTML = carregaContato();
    } else {
        divConteudo.innerHTML = carregaHome();
    }
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

