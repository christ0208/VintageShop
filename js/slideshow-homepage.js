const MAX_SLIDESHOWS = 6;

let showedSideshow = 0;
resetMarkButtonSlideshow();
markButtonSlideshow();

setButtonSlideshowListener();
setInterval(moveSlideshow, 3000);

function setButtonSlideshowListener(){
    $('.sideshow-button').each(function(i, obj){
        $(this).click(function(){
            moveSlideshowBasedOnIndex(i);
        })
    })
}

function moveSlideshow(){
    showedSideshow++;
    if(showedSideshow >= MAX_SLIDESHOWS) showedSideshow = 0;

    changeSlide(showedSideshow);
}

function moveSlideshowBasedOnIndex(index){
    showedSideshow = index;

    changeSlide(showedSideshow);
}

function changeSlide(index){
    let containerWidth = $('.content-top-part-sideshow').eq(0).width();
    resetMarkButtonSlideshow();
    markButtonSlideshow();
    $('.sideshow-container').eq(0).animate({marginLeft: -containerWidth * index}, 500);
}

function markButtonSlideshow(){
    // tandain button sesuai yang di show
    $('.sideshow-button').each(function(i, obj){
        if(i === showedSideshow) this.classList.add("symbol-dot__selected");
    })
}

function resetMarkButtonSlideshow(){
    $('.sideshow-button').each(function(i, obj){
        this.classList.remove("symbol-dot__selected");
    })
}
