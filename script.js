// Seleção dos elementos
const input = document.getElementById('phone');
const gerarLinkBtn = document.getElementById('gerarLink');
const abreLinkBtn = document.getElementById('abreLink');
const linkDiv = document.getElementById('link');
const clickCopiar = document.getElementById('clickCopiar');

// Formatar o telefone
input.addEventListener("input", function(event) {
    var phoneInput = event.target;
    var phone = phoneInput.value.replace(/\D/g, ''); // Remove caracteres não numéricos
    var formattedPhone = '';
    if (phone.length > 0) {
        formattedPhone = '(' + phone.substring(0, 2);
        if (phone.length > 2) {
            formattedPhone += ') ';
            if (phone.length > 7) {
                formattedPhone += phone.substring(2, 7) + '-' + phone.substring(7, 11);
            } else {
                formattedPhone += phone.substring(2, phone.length);
            }
        }
    }
    phoneInput.value = formattedPhone;
    validarTelefone(phone);
});

// Validar telefone
function validarTelefone(numeroTelefone) {
    if (numeroTelefone.length === 11) {
        gerarLinkBtn.disabled = false;
        abreLinkBtn.disabled = false;
        input.style.color = "green"; 
    } else {
        gerarLinkBtn.disabled = true;
        abreLinkBtn.disabled = true;
        input.style.color = "initial"; 
    }
}

// Exibir link logo abaixo do input do telefone
function exibirLink(link) {
    linkDiv.innerHTML = `<a href="#" id="whatsappLink">${link}</a>`;
}

// Gerar link do WhatsApp
function gerarLink(numeroTelefone) {
    if (numeroTelefone.length === 11) {
        var base_url = "https://wa.me/";
        var url = base_url + numeroTelefone;
        return url;
    } else {
        return "";
    }
}


// tudo errado pra baixo
// Copiar link para área de transferência
gerarLinkBtn.addEventListener("click", function() {
    var phone = input.value.replace(/\D/g, ''); // Remove caracteres não numéricos
    var link = gerarLink(phone);
    if (link) {
        exibirLink(link);
        clickCopiar.innerText = "Clique no link para copiar";
    }
});

// Evento para copiar o link quando clicado
linkDiv.addEventListener("click", function(event) {
    if (event.target.id === "whatsappLink") {
        event.preventDefault();
        var link = event.target.textContent;
        copiarParaAreaDeTransferencia(link);
        clickCopiar.innerText = "Link copiado para área de transferência";
    }
});

// Função para copiar texto para a área de transferência
function copiarParaAreaDeTransferencia(texto) {
    var inputTemporario = document.createElement("input");
    inputTemporario.value = texto;
    document.body.appendChild(inputTemporario);
    inputTemporario.select();
    document.execCommand("copy");
    document.body.removeChild(inputTemporario);
}

// Limpar mensagem ao clicar no input de telefone
input.addEventListener("click", function() {
    clickCopiar.innerText = "Clique no link para copiar";
});
