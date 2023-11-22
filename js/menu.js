var responsive = document.querySelector("section.responsive");
var menu = document.querySelector(".menu");
var active = false;
var b1 = document.querySelector(".b1");
var b2 = document.querySelector(".b2");
var b3 = document.querySelector(".b3");

responsive.addEventListener("click", function() {
    

    menu.classList.toggle("menuactive");

    b1.classList.toggle("b1active");
    b2.classList.toggle("b2active");
    b3.classList.toggle("b3active");

    active = true;
});


window.addEventListener("scroll", function() {
    
    if (active) {
        menu.classList.remove("menuactive");
        b1.classList.remove("b1active");
        b2.classList.remove("b2active");
        b3.classList.remove("b3active");
        active = false;
    }
});
