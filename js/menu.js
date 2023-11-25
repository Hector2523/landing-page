var responsive = document.querySelector("section.responsive");
var active = false;
var b1 = document.querySelector(".b1");
var b2 = document.querySelector(".b2");
var b3 = document.querySelector(".b3");


responsive.addEventListener("click", function() {

    let menu = document.querySelector(".menu");
    

    menu.classList.toggle("menuactive");

    b1.classList.toggle("b1active");
    b2.classList.toggle("b2active");
    b3.classList.toggle("b3active");
    document.querySelector("ul.drop").classList.remove("active");
    document.querySelector("ul.drop .li1").classList.remove("active");
    document.querySelector("ul.drop .li2").classList.remove("active");
    document.querySelector("ul.drop .li3").classList.remove("active");

    active = true;
});


window.addEventListener("scroll", function() {
    
    if (active) {
        let menu = document.querySelector(".menu");

        menu.classList.remove("menuactive");
        b1.classList.remove("b1active");
        b2.classList.remove("b2active");
        b3.classList.remove("b3active");
        document.querySelector("ul.drop").classList.remove("active");
        document.querySelector("ul.drop .li1").classList.remove("active");
        document.querySelector("ul.drop .li2").classList.remove("active");
        document.querySelector("ul.drop .li3").classList.remove("active");
        document.querySelector("a.ingredientes span.material-symbols-outlined").classList.remove("rotate");

        active = false;
    }
});
