document.addEventListener('DOMContentLoaded', ()=>{
function carregaHome() {
    return `
        <div style="background-color: rgb(135, 218, 20);">
            <h1>Página inicial!</h1>
        </div>
    `;
}

function carregaContato() {
    return `
    <div style="background-color: chocolate;">
        <h1>Página contato</h1>
    </div>
        
    `;
}

function navegar() {
    const divConteudo = document.getElementById('conteudo');
    const hash = window.location.hash;

    if (hash === '#contato') {
        divConteudo.innerHTML = carregaContato();
    } else {
        divConteudo.innerHTML = carregaHome();
    }
}

document.getElementById('home-link').addEventListener('click', () => {
    window.location.hash = '#home';
    navegar();
});

document.getElementById('contato-link').addEventListener('click', () => {
    window.location.hash = '#contact';
    navegar();
});


window.addEventListener('load', navegar);
window.addEventListener('hashchange', navegar);
})