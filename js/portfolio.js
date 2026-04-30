function precarregar() {
    const botaoTema = document.getElementById("tema-btn");
    const body = document.body;

    let contador = 0;
    const totalTrocas = 6;

    const animacao = setInterval(() => {
        body.classList.toggle("claro");

        if (body.classList.contains("claro")) {
            botaoTema.textContent = "Tema Escuro";
        } else {
            botaoTema.textContent = "Tema Claro";
        }

        contador++;

        if (contador >= totalTrocas) {
            clearInterval(animacao);

            // garante que termine no tema escuro
            body.classList.remove("claro");
            botaoTema.textContent = "Tema Claro";
        }
    }, 400); // velocidade da troca
}

const botaoTema = document.getElementById("tema-btn");
const body = document.body;

botaoTema.addEventListener("click", () => {
    body.classList.toggle("claro");

    if (body.classList.contains("claro")) {
        botaoTema.textContent = "Tema Escuro";
    } else {
        botaoTema.textContent = "Tema Claro";
    }
});