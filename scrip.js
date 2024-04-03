var nomeGlobal;
var mensagemGlobal;
var dateGlobal;

function conferirMensagemWhatsApp() {
    var nome = document.getElementById("nome").value;
    var mensagem = document.getElementById("mensagem").value;
    var date = new Date();

    nomeGlobal = nome;
    mensagemGlobal = mensagem;
    dateGlobal = dateFormat(date);

    renderConf()
}

function enviar() {
    var numeroTelefone = "5541999999999";

    var linkWhatsApp =
        `https://wa.me/${numeroTelefone}?text=${nomeGlobal}: - ${mensagemGlobal} - ${dateGlobal}`;

    window.open(linkWhatsApp, '_blank');
}

function dateFormat(date) {
    return date.toLocaleString();
}

function renderConf() {
    var start = document.getElementById("conf");
    var dynamicDiv = document.getElementById("dynamicDiv");

    start.addEventListener("click", function () {
        dynamicDiv.innerHTML = `<p>Nome: <span id="confNome">${nome}</span></p><p>Observações: <span id="confMsg">${mensagem}</span></p><p>Data: <span id="confDate"></span></p><button onclick="enviar()">Enviar Mensagem</button>`;

        document.getElementById("confNome").textContent = nomeGlobal;
        document.getElementById("confMsg").textContent = mensagemGlobal;
        document.getElementById("confDate").textContent = dateGlobal;

    });
}

document.getElementById('flexSwitchCheckDefault').addEventListener('click',()=>{
    if (document.body.getAttribute('data-bs-theme') == 'dark') {
        document.body.setAttribute('data-bs-theme','light')
    }
    else {
        document.body.setAttribute('data-bs-theme','dark')
    }
})

console.log(document.getElementById('flexSwitchCheckDefault').checked)