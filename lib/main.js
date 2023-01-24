$(document).ready(function() {
  $('#telefone').mask('(00) 00000-0000', {
    placeholder: '(XX) XXXXX-XXXX' 
  })

  $('.cpf').mask('000.000.000-00', {
    placeholder: 'XXX.XXX.XXX-XX' 
  })

  $('#cep').mask('00.000-000', {
    placeholder: 'XX.XXX-XXX' 
  })
})