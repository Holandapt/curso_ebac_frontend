const form = document.getElementById('form-numeros');


form.addEventListener ('submit', function(e){
    let formValido = false
    e.preventDefault()

const numeroA = document.getElementById('campoA');
const numeroB = document.getElementById('campoB');
const mensagemSucesso = `O valor no campo B: ${numeroB.value} e maior que o valor do campo A: ${numeroA.value}` 

formValido = validaForm(numeroA.value, numeroB.value);
    if (!formValido){
        return (alert (document.querySelector(`.error-message`)))
    }
    else {
        alert (mensagemSucesso)
        numeroA.value = " ";
        numeroB.value = " "
    }

    const containerMensagemSucesso = document.querySelector('.message-success')
    //containerMensagemSucesso.innerHTML = mensagemSucesso;
    //containerMensagemSucesso.style.display = 'block'

function validaForm(numeroA, numeroB) {
    if (numeroA < numeroB) {
        return mensagemSucesso
    } else {
        document.querySelector('.error-message').style.display = 'block'
        containerMensagemSucesso.style.display = 'none'
    }
}
})

