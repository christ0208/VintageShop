function renderBooks(){
    renderItem(books, document.getElementById("books-slides"))
}

function renderGramophone(){
    renderItem(gramophones, document.getElementById("gramophones-slides"))
}

function renderRadio(){
    renderItem(radios, document.getElementById("radios-slides"));
}

renderBooks();
renderGramophone();
renderRadio();