const input = document.getElementById('phone');
const gerarLink = document.querySelectorAll("[link]");
const gerarCopiar = document.getElementById("[copiar]")

// Formatar o telefone
document.getElementById('input').addEventListener('input', function(e) {
 
    let inputValue = e.target.value;
    
    let cleanedValue = inputValue.replace(/\D/g, '');
    
    let formattedValue = cleanedValue.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
    
    e.target.value = formattedValue;

    // Verifica se o telefone é válido (completo)
    if (cleanedValue.length === 11) {
        e.target.style.color = "green"; 
    } else {
        e.target.style.color = ""; 
    }

 });

