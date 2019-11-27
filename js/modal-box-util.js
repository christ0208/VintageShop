$('.modal-supporting-background').click(closeModal)
$('#btn-close-modal').click(closeModal)

function closeModal(){
    $('.modal-supporting-background').css('display', 'none');
    $('.modal-box').css('display', 'none');
    window.location.reload();
}

function openModal(){
    $('.modal-supporting-background').css('display', 'inline');
    $('.modal-box').css('display', 'inline');
}