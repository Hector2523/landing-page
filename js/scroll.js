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

function back() {
    setTimeout(scrollBack, 600);

    let scrollSection = document.getElementById("scroll");
    scrollSection.scrollTop = 0;

    secaoObservada.classList.remove('visible');
    document.querySelector(".lido").style.backgroundColor = "#ddaa77";

    function scrollBack() {
        document.querySelector("body").scrollIntoView();
    }
    
}

function cafe() {
    setTimeout(scrollCafe, 700)

    function scrollCafe() {
        document.getElementById("cafe").scrollIntoView();
    }
    
}

function leite() {
    setTimeout(scrollLeite, 700);

    function scrollLeite() {
        document.getElementById("leite").scrollIntoView();
    }
    
}

function whey() {

    setTimeout(scrollWhey, 700);

    function scrollWhey() {
        document.getElementById("whey").scrollIntoView();
    }
    
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

function leiteVisivel() {
    const secaoObservada = document.querySelector('#leite');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio >= 0) {
                secaoObservada.classList.add('visible');
                document.querySelector(".lido").style.backgroundColor = "rgb(191, 220, 235)";
            } else {
                secaoObservada.classList.remove('visible');
                document.querySelector(".lido").style.backgroundColor = "#ddaa77";
            }
        });
    }, { threshold: 0});

    observer.observe(secaoObservada);
}

window.addEventListener('load', leiteVisivel);
window.addEventListener('scroll', leiteVisivel);

function wheyVisivel() {
    const secaoObservada = document.querySelector('#whey');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.6) {
                secaoObservada.classList.add('visible');
                document.querySelector(".lido").style.backgroundColor = "rgb(114, 111, 111)";
            } else {
                secaoObservada.classList.remove('visible');
                document.querySelector(".lido").style.backgroundColor = "#ddaa77";
            }
        });
    }, { threshold: 0.6 });

    observer.observe(secaoObservada);
}

window.addEventListener('load', wheyVisivel);
window.addEventListener('scroll', wheyVisivel);

