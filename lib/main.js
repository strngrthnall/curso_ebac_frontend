$(document).ready(function() {
  $('#telefone').mask('(00) 00000-0000', {
    placeholder: '(XX) XXXXX-XXXX' 
  })

  $('form').validate({
    rules: {
      nome:{
        required: true
      },
      email:{
        required: true,
        email: true
      },
      telefone:{
        required: true
      },
      checkbox: {
        required: true
      }
    }, messages: {
      nome: 'Por favor, informe seu nome.',
      email: 'Por favor, insira seu e-mail.',
      telefone: 'Por favor, insira seu telefone.',
      checkbox: 'Precisa aceitar os termos do site.'
    },
    highlight: function(element) {
      $(element).addClass('erro');
    },
    unhighlight: function(element) {
      $(element).removeClass('erro');
    },
    submitHandler: function(form) {
      alert('Cadastro realizado com sucesso')
      $('#nome').val('')
      $('#email').val('')
      $('#telefone').val('')
      $('#aceito-termos').prop('checked', false)
    },
  })
})