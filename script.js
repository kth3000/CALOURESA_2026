/* =========================RELÓGIO DIGITAL========================= */

function atualizarRelogio() {
    const agora = new Date();

    let horas = agora.getHours().toString().padStart(2, "0");
    let minutos = agora.getMinutes().toString().padStart(2, "0");
    let segundos = agora.getSeconds().toString().padStart(2, "0");

    document.getElementById("relogio").innerHTML =
        `${horas}:${minutos}:${segundos}`;
}

setInterval(atualizarRelogio, 1000);
atualizarRelogio();


/* =========================CONTAGEM REGRESSIVA========================= */

const dataEvento = new Date("March 21, 2026 13:00:00").getTime();

function atualizarContador() {

    const agora = new Date().getTime();
    const diferenca = dataEvento - agora;

    if (diferenca <= 0) {
        document.getElementById("dias").innerHTML = "00";
        document.getElementById("horas").innerHTML = "00";
        document.getElementById("minutos").innerHTML = "00";
        document.getElementById("segundos").innerHTML = "00";
        return;
    }

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
    const segundos = Math.floor((diferenca / 1000) % 60);

    document.getElementById("dias").innerHTML = dias.toString().padStart(2, "0");
    document.getElementById("horas").innerHTML = horas.toString().padStart(2, "0");
    document.getElementById("minutos").innerHTML = minutos.toString().padStart(2, "0");
    document.getElementById("segundos").innerHTML = segundos.toString().padStart(2, "0");
}

setInterval(atualizarContador, 1000);
atualizarContador();


/* =========================GOTAS CAINDO========================= */

function criarGota() {
    const gota = document.createElement("div");
    gota.classList.add("gota");

    gota.style.left = Math.random() * 100 + "vw";
    gota.style.animationDuration = (Math.random() * 1 + 0.5) + "s";
    gota.style.opacity = Math.random();

    document.body.appendChild(gota);

    setTimeout(() => {
        gota.remove();
    }, 1500);
}

setInterval(criarGota, 120);


/* =========================ENVIAR MÚSICA========================= */

function enviarMusica() {

    const musica = document.getElementById("musicaInput").value;

    if (musica.trim() === "") {
        document.getElementById("mensagemMusica").innerHTML =
            "Digite uma música primeiro 🎵";
        return;
    }

    const numeroMusica = "5591989113963";

    const texto = encodeURIComponent(
        `🎵 Sugestão de música para a Calouresa 2026:\n${musica}`
    );

    window.open(`https://wa.me/${numeroMusica}?text=${texto}`, "_blank");

    document.getElementById("mensagemMusica").innerHTML =
        "Música enviada com sucesso 💙";

    document.getElementById("musicaInput").value = "";
}


/* =========================COMPRAR INGRESSO========================= */

function comprarWhatsApp(tipo) {

    const numeroIngresso = "5591981061385";

    const mensagem = encodeURIComponent(
        `🎟 Olá! Quero comprar ingresso:\n${tipo}\nCalouresa 2026 - Encaixe Hidráulico`
    );

    window.open(`https://wa.me/${numeroIngresso}?text=${mensagem}`, "_blank");
}
