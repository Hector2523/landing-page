function home() {
    let home = document.getElementById("home");

    if (home) {
        home.scrollIntoView()
    }
}

function sobre() {
    let sobre = document.getElementById("sobre");

    if (sobre) {
        sobre.scrollIntoView()
    }
}

function ingredientes() {
    let ingredientes = document.getElementById("ingredientes");

    if (ingredientes) {
        ingredientes.scrollIntoView()
    }
}

function participantes() {
    let participantes = document.getElementById("participantes");

    if (participantes) {
        participantes.scrollIntoView()
    }
}

function back() {
    document.querySelector("body").scrollIntoView();
}