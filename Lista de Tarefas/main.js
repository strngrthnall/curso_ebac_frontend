$('document').ready(() => {

  $('form').on('submit', (e) =>{
    e.preventDefault();

    const novaTarefa = $('#nova-tarefa').val();
    const novoItem = $(`
      <li>
        <a id="tarefa" class="">
          ${novaTarefa}
        </a>
      </li>`
    );
    
    $(novoItem).appendTo('ol div')

    $('#nova-tarefa').val('')
    
  })

  $('ol').on('click', 'li', () => $(event.target).toggleClass('riscado'))
  
})