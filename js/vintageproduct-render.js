function renderItem(arr, viewObj){
    var rendered = "";
    arr.forEach(function(item, index){
        rendered += `
            <div class="content-product-slide">
                <div class="content-product-flex">
                    <div class="content-product-image"><img src="` + item["image"] + `" alt=""></div>
                    <div class="content-product-text">
                        <div class="content-product-title">` + item["title"] + `</div>
                        <div class="content-product-description">` + item["description"] + `</div>
                        <div class="content-product-button"><button>Check It Out!</button></div>
                    </div>
                </div>
            </div>
        `
    });
    viewObj.innerHTML = rendered;
}