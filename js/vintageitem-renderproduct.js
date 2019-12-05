// <div class="content-product-slide">
//     <div class="content-product-image">
//
//     </div>
//     <div class="content-product-title">
//          asdasd
//     </div>
//     <div class="content-product-description">
//          asdds
//     </div>
// </div>

function renderItem(arr, viewObj){
    var rendered = "";
    arr.forEach(function(item, index){
        rendered += `
            <div class="content-product-slide">
                <div class="content-product-flex">
                    <div class="content-product-image"><img src="` + item["image"] + `" alt=""></div>
                    <div class="content-product-text">
                        <div class="content-product-title">` + item["title"] + `</div>
                        <div class="content-product-description">` + item["year"] + `</div>
                        <div class="content-product-button"><button>Check It Out!</button></div>
                    </div>
                </div>
            </div>
        `
    })
    viewObj.innerHTML = rendered;
}


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