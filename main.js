const form = document.getElementById('formulario')

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const numeroA = document.getElementById('numero-a');
    const numeroB = document.getElementById('numero-b');
    const mensagemSucesso = `O número: <b>${numeroA.value}</b> é menor que o número <b>${numeroB.value}</b>`;
    const mensagemErro = `O número: <b>${numeroA.value}</b> é maior que o número <b>${numeroB.value}</b>`;


    const containerMensagem = document.querySelector('.mensagem');

    containerMensagem.style.display = 'none';

    numeroA.style.border = '';
    numeroB.style.border = '';

    if (numeroA.value < numeroB.value) {
        containerMensagem.innerHTML= mensagemSucesso;
        containerMensagem.style.display = 'block';
        containerMensagem.style.backgroundColor = "#27ae60"

        numeroA.value = '';
        numeroB.value = '';
    } else {
        containerMensagem.innerHTML= mensagemErro;
        containerMensagem.style.display = 'block';
        containerMensagem.style.backgroundColor = 'red'
    }
})