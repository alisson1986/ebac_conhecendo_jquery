$(document).ready(function() {
    $('form').on('submit', function(e) {
        e.preventDefault();
        const adicionarTarefa = $('#tarefa').val();
        const novaTarefa = $(`<li> ${adicionarTarefa} </li>`);
        $(novaTarefa).appendTo('ul');
        $('#tarefa').val('');
        $('li').click(function() {
            $('li').addClass('decoration');
        })
    })
})