// script.js

// === CONTAGEM REGRESSIVA ===
function iniciarContagem() {
    const eventoData = new Date("March 21, 2026 13:00:00").getTime();

    const intervalo = setInterval(() => {
        const agora = new Date().getTime();
        const distancia = eventoData - agora;

        if (distancia < 0) {
            clearInterval(intervalo);
            document.getElementById("contador").innerHTML = "<h3>🎉 O evento já começou!</h3>";
            return;
        }

        const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

        document.getElementById("contador").innerHTML = `
            <div class="tempo-box"><span>${dias}</span>Dias</div>
            <div class="tempo-box"><span>${horas}</span>Horas</div>
            <div class="tempo-box"><span>${minutos}</span>Minutos</div>
            <div class="tempo-box"><span>${segundos}</span>Segundos</div>
        `;
    }, 1000);
}

// === ENVIAR MÚSICA ===
function enviarMusica() {
    const numeroMusica = "5591989113963"; // Número para sugestões de música
    const input = document.getElementById("musicaInput").value.trim();

    if (input === "") {
        alert("Por favor, digite o nome da música 🎵");
        return;
    }

    const mensagem = `🎵 Olá! Quero sugerir a música: ${input} para tocar na Calouresa 2026 🎉`;
    const url = `https://api.whatsapp.com/send?phone=${numeroMusica}&text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
}

// === COMPRAR VIA WHATSAPP ===
function comprarWhatsApp(tipoIngresso) {
    const numeroIngressos = "5591981061385"; // Número para compra de ingressos
    const mensagem = `Olá! Quero comprar ingresso: ${tipoIngresso} para a Calouresa 2026 🎉`;
    const url = `https://api.whatsapp.com/send?phone=${numeroIngressos}&text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
}

// === INICIAR AO CARREGAR ===
window.onload = iniciarContagem;
