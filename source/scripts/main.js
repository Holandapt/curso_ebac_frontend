const form = document.getElementById("form-deposito");
const nomeBeneficiario = document.getElementById(`nome-beneficiario`)

function validaNome(nomeCompleto) {
    const nomeComoArray = nomeCompleto.split(" ")
    return nomeComoArray.length >= 2;
}

form.addEventListener( 'submit', function(e) {
    let formEValido = false;

    e.preventDefault();

    formEValido = validaNome(nomeBeneficiario.value)
    if (formEValido) {
        const containerMensagemSucesso = document.querySelector('.success-message') 
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block'
        
        nomeBeneficiario.value = '';

    } else {
            nomeBeneficiario.style.border = '1px solid red'
            document.querySelector('.error-message').style.display = 'block'
        }


    nomeBeneficiario.addEventListener('keyup', function(e){
        console.log(e);
        formEValido = validaNome(e.target.value)
        
        if (!formEValido) {
                nomeBeneficiario.classList.add('error');
                document.querySelector('.error-message').style.display = 'block'
            } else{
                nomeBeneficiario.classList.remove('error');
                document.querySelector('.error-message').style.display = 'none'
            }
        }
    )
    
    })