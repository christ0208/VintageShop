var index = 0;
var intervalObj = 0;

function onLeftButtonMouseDown(){
    intervalObj = setTimeout(onLeftButtonMouseDown, 1);
    var currentLeftMargin = parseInt($('.content-products-slides').eq(index).css("margin-left").replace("px", ""));
    if(currentLeftMargin + 10 >= 0){
        $('.content-products-slides').eq(index).css({marginLeft: 0});
    }
    else {
        $('.content-products-slides').eq(index).css({marginLeft: currentLeftMargin + 10});
    }
}

function onLeftButtonMouseUp(){
    clearTimeout(intervalObj);
}

function onRightButtonMouseDown(){
    intervalObj = setTimeout(onRightButtonMouseDown, 1);
    var currentLeftMargin = parseInt($('.content-products-slides').eq(index).css("margin-left").replace("px", ""));
    var currentWidth = $('.content-products-slide').outerWidth(true) * $('.content-products-slide').;
    console.log(currentWidth,window.innerWidth);
    if(currentLeftMargin - 10 <= currentWidth-window.innerWidth){
        $('.content-products-slides').eq(index).css({marginLeft: currentWidth-window.innerWidth});
    }
    else {
        $('.content-products-slides').eq(index).css({marginLeft: currentLeftMargin - 10});
    }
}

function onRightButtonMouseUp(){
    clearTimeout(intervalObj);
}

$(".content-products-left-button").each(function(i, obj){
    index = i;
    $(this).mousedown(onLeftButtonMouseDown).mouseup(onLeftButtonMouseUp);
});

$(".content-products-right-button").each(function(i, obj){
    index = i;
    $(this).mousedown(onRightButtonMouseDown).mouseup(onRightButtonMouseUp);
});