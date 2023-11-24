function home() {
    let home = document.querySelector("body");

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

function back() {
    document.querySelector("body").scrollIntoView();
}

function cafe() {
    document.getElementById("cafe").scrollIntoView();
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


function cafeVisivel() {
    const secaoObservada = document.querySelector('#cafe');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                
                secaoObservada.classList.add('visible');
                document.querySelector(".lido").style.backgroundColor = "#92675C";
            } else {
                secaoObservada.classList.remove('visible');
                document.querySelector(".lido").style.backgroundColor = "#ddaa77";
            }
        });
    });

    observer.observe(secaoObservada);
}

window.addEventListener('load', cafeVisivel);
window.addEventListener('scroll', cafeVisivel);


