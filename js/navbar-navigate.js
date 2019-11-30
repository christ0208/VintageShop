function changePage(e){
    window.location.href = redirection[e.currentTarget.id];
}

$('#home-button').click(changePage);
$('#item-button').click(changePage);
$('#furniture-button').click(changePage);
$('#about-button').click(changePage);
$('#register-button').click(changePage);