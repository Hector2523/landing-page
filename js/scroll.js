function home() {
    let home = document.querySelector("body");

    if (home) {
        home.scrollIntoView();
    }
}

function sobre() {
    let sobre = document.getElementById("Langs");

    if (sobre) {
        sobre.scrollIntoView();
    }
}

function vitaminas() {
    document.getElementById("vitaminas").scrollIntoView();
}

function sucos() {
    document.getElementById("sucos").scrollIntoView();
}

function sanduiches() {
    document.getElementById("sanduiches").scrollIntoView();
}

function sobremesas() {
    document.querySelector(".fundo_sobremesa").scrollIntoView();
}

function display() {
    document.querySelector('.drop').style.display = 'block';
}

function second() {
    document.querySelector('.drop').style.display = 'none';
}

function adicionarClasseQuandoVisivel() {
    const secaoObservada = document.querySelector('#animationOne');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                secaoObservada.classList.add('visible');
                isClickEnabled = true;
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
    var secaoObservada = document.querySelector('#ingredientes');

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

window.addEventListener('load', ingredientesVisivel);
window.addEventListener('scroll', ingredientesVisivel);

var animationIsTrue = true;

function cafeVisivel() {
    var secaoObservada = document.querySelector('#cafe');
    

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                secaoObservada.classList.add('visible');
                if (animationIsTrue == true) {
                    animationIsTrue = false;

                    setInterval(img, 1000);

                    function img() {
                        document.getElementById("cafeimg").style.translate = "0% -50%";
                    }
                }


            } else {
                secaoObservada.classList.remove('visible');
                if (animationIsTrue == false) {
                    document.getElementById("cafeimg").style.translate = "0% 4%";
                }

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
            } else {
                secaoObservada.classList.remove('visible');
            }
        });
    }, { threshold: 0 });

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
            } else {
                secaoObservada.classList.remove('visible');
            }
        });
    }, { threshold: 0.6 });

    observer.observe(secaoObservada);

}

window.addEventListener('load', wheyVisivel);
window.addEventListener('scroll', wheyVisivel);

function sobremesaVisivel() {
    const secaoObservada = document.querySelector('.fundo_sobremesa');

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

window.addEventListener('load', sobremesaVisivel);
window.addEventListener('scroll', sobremesaVisivel);

var isClickEnabled = true;

document.querySelector(".back").addEventListener("click", () => {

    setTimeout(enableClick, 2000)

    if (isClickEnabled == true) {

        isClickEnabled = false;

        setTimeout(scrollBack, 600);

        let scrollSection = document.getElementById("scroll");
        scrollSection.scrollTop = 0;

        document.querySelector(".lido").style.backgroundColor = "#ddaa77";

        document.getElementById("cafeimg").style.translate = "0% 4%";

        function scrollBack() {
            document.querySelector("body").scrollIntoView(2000);
        }

        
        

    } else {
        console.log("Você não possui clicks");
    }
});

function enableClick() {
    console.log("Clique habilitado");
    isClickEnabled = true;
}