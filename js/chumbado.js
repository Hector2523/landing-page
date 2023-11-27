function openChumbado() {
    document.getElementById("chumbado").style.display = "block";


    setTimeout(scroll, 0);

    document.querySelector("section#animationOne div.open").style.opacity = "0";

    setTimeout(none, 1100)

    function none() {
        document.querySelector("section#animationOne div.open").style.display = "none";
    }

    function scroll() {
        document.getElementById("chumbado").scrollIntoView();
        setTimeout(opacity, 400)

        function opacity() {
            document.getElementById("chumbado").style.opacity = "1";
        }

    }
}

function closeChumbado() {
    
    document.getElementById("chumbado").style.opacity = "0";

    setTimeout(scroll, 0);

    document.querySelector("section#animationOne div.open").style.opacity = "0";
    document.querySelector("section#animationOne div.open").style.display = "flex";

    setTimeout(none, 1100)

    function none() {
        document.querySelector("section#animationOne div.open").style.opacity = "1";
    }

    function scroll() {
        document.querySelector("body").scrollIntoView();
        setTimeout(opacity, 400)

        function opacity() {
            document.getElementById("chumbado").style.display = "none";
        }

    }
}

