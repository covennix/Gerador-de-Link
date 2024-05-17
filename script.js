//Variáveis
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

// Exibir link logo abaixo do input telefone
function exibirLink(link) {
    linkDiv.style.display = "flex";
    linkDiv.innerHTML = `<a href="#" id="whatsappLink">${link}</a>`;
    clickCopiar.style.display = "flex";
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

// Copiar link para área de transferência
gerarLinkBtn.addEventListener("click", function() {
    var phone = input.value.replace(/\D/g, '');
    var link = gerarLink(phone);
    if (link) {
        exibirLink(link);
        clickCopiar.innerText = "Clique no link para copiar";
    }
});

// Copiar o link quando clicado
linkDiv.addEventListener("click", function(event) {
    if (event.target.id === "whatsappLink") {
        event.preventDefault();
        var link = event.target.textContent;
        navigator.clipboard.writeText(link).then(() => {
            clickCopiar.innerText = "Link copiado para área de transferência";
        });
    }
});

// Abrir o link
abreLinkBtn.addEventListener("click", function() {
    var phone = input.value.replace(/\D/g, '');
    var link = gerarLink(phone);
    if (link) {
        window.open(link, "_blank");
    }
});

// Limpar mensagem 
input.addEventListener("click", function() {
    if (clickCopiar.innerText === "Link copiado para área de transferência") {
        clickCopiar.style.display = "none";
        clickCopiar.innerText = "Clique no link para copiar";
        linkDiv.innerText = ""; 
        linkDiv.style.display = "none"; 
        input.value = ""; 
        gerarLinkBtn.disabled = true; 
        copiarLinkBtn.disabled = true; 
    }
});


