// credits to RY18-2 for raining animation

function randomizing(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRainDrops(){
    let i = 0;
    for(i = 0; i < 78; i++){
        var containerWidth = $('.rain-background').eq(0).width();
        var containerHeight = $('.rain-background').eq(0).height();
        var topPos = randomizing(-100, 100);
        var leftPos = randomizing(-100, 100);
        $('.rain-background').append('<div class="drop" id="drop' + i + '"></div>');
        $("#drop" + i).css('top', topPos * containerHeight / 100);
        $("#drop" + i).css('left', leftPos * containerWidth / 100);
    }
}

generateRainDrops();