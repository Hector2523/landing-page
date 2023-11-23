function home() {
    let home = document.getElementById("home");

    if (home) {
        home.scrollIntoView();
    }
}

function sobre() {
    let sobre = document.getElementById("sobre");

    if (sobre) {
        sobre.scrollIntoView();
    }
}

function ingredientes() {
    let ingredientes = document.getElementById("ingredientes");

    if (ingredientes) {
        ingredientes.scrollIntoView();
    }
}

function participantes() {
    let participantes = document.getElementById("participantes");

    if (participantes) {
        participantes.scrollIntoView();
    }
}

function back() {
    document.querySelector("body").scrollIntoView();
}

function adicionarClasseQuandoVisivel() {
    const secaoObservada = document.querySelector('#animationOne');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                
                secaoObservada.classList.add('visible');
            } else {
                secaoObservada.classList.remove('visible');
            }
        });
    });

    observer.observe(secaoObservada);
}

window.addEventListener('load', adicionarClasseQuandoVisivel);
window.addEventListener('scroll', adicionarClasseQuandoVisivel);

function ingredientesVisivel() {
    const secaoObservada = document.querySelector('#ingredientes');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                
                secaoObservada.classList.add('visible');
            } else {
                secaoObservada.classList.remove('visible');
            }
        });
    });

    observer.observe(secaoObservada);
}

window.addEventListener('load', ingredientesVisivel);
window.addEventListener('scroll', ingredientesVisivel);


