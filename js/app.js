import {NavBar} from './componentes/navbar.js';
import {Router} from './router.js';
class App {
    constructor() {
        this.nav = new NavBar();
        this.router = new Router();
        this.iniciar();
    }

    iniciar() {
        this.nav.carregar()
        document.getElementById('home-link').addEventListener('click', () => {
            window.location.hash = '#home';
            this.router.navegar();
        });

        document.getElementById('contato-link').addEventListener('click', () => {
            window.location.hash = '#contato';
            this.router.navegar();
        });

        this.router.navegar();
    }
}

const app = new App();