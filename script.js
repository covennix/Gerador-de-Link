// Formatar o telefone
document.getElementById("phone").addEventListener("input", function(event) {
    var phoneInput = event.target;
    var phone = phoneInput.value.replace(/\D/g, ''); 
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
    var botaoGerarCopiar = document.getElementById("gerarCopiar");
    if (numeroTelefone.length === 11) {
        botaoGerarCopiar.disabled = false;
        document.getElementById("phone").style.Color = "blue"; 
    } else {
        botaoGerarCopiar.disabled = true;
        document.getElementById("phone").style.Color = "initial"; 
    }
}

// Gerar e copiar link
document.getElementById("gerarCopiar").addEventListener("click", function() {
    var phone = document.getElementById("phone").value.replace(/\D/g, ''); 
    var link = gerarLink(phone);
    copiarParaAreaDeTransferencia(link);
});

// Gerar link do WhatsApp
function gerarLink(numeroTelefone) {
    var base_url = "https://wa.me/55";
    var url = base_url + numeroTelefone;
    return url;
}

// Copiar link para área de transferência
function copiarParaAreaDeTransferencia(texto) {
    var inputTemporario = document.createElement("input");
    inputTemporario.value = texto;
    document.body.appendChild(inputTemporario);
    inputTemporario.select();
    document.execCommand("copy");
    document.body.removeChild(inputTemporario);
    alert("Link copiado para área de transferência!");
}


