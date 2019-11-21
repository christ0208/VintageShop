const MAX_SLIDESHOWS = 6;

let showedSideshow = 0;
let containerWidth = $('.content-top-part-sideshow').eq(0).width();
let containerHeight = $('.content-top-part-sideshow').eq(0).height();

$('.sideshow-content').eq(showedSideshow).css('display', 'block');

setInterval(moveSlideshow, 3000);

function moveSlideshow(){
    showedSideshow++;
    if(showedSideshow >= MAX_SLIDESHOWS) showedSideshow = 0;

    $('.sideshow-content').eq(showedSideshow).css({
       marginLeft: + containerWidth,
       display: 'block'
    });

    $('.sideshow-content').eq(showedSideshow - 1).animate({left: - containerWidth}, 500, function(){
        if(showedSideshow - 1 < 0) $('.sideshow-content').eq(MAX_SLIDESHOWS - 1).css('display', 'none');
        else $('.sideshow-content').eq(showedSideshow - 1).css('display', 'none');

        $('.sideshow-content').eq(showedSideshow - 1).css('left', '0');
    });

    $('.sideshow-content').eq(showedSideshow).animate({marginLeft: 0}, 500);
}