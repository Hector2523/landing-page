var time = document.querySelector(".time");
var load = document.getElementById("load");

setTimeout(loading, 4000);

function loading() {
    load.style.opacity = "0";
    setTimeout(display, 690)

    function display() {
        time.style.display = "block";
    }

    setTimeout(none, 1100)

    function none() {
        load.style.display = "none";
        time.style.opacity = "1";
    }
}