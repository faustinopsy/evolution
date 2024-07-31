export class NavBar{
    constructor() {
        this.elemento = document.querySelector('nav')
    }

    carregar() {
        this.elemento.innerHTML = `
            <a href="#home" id="home-link">Home</a>
            <a href="#contato" id="contato-link">Contato</a>
        `;
    }
}
    
