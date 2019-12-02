var index = 0;
var intervalObj = 0;

function vw(v) {
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    return (v * w) / 100;
}

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
    var currentWidth = $('.content-products-slides').eq(index).outerWidth();
    var slidesObj = $('.content-products-slides').eq(index).find('.content-product-slide');
    var itemsTotalWidth = slidesObj.outerWidth(true) * slidesObj.length + vw(6);
    if(itemsTotalWidth < currentWidth){
        $('.content-products-slides').eq(index).css({marginLeft: currentLeftMargin});
    }
    else if(currentLeftMargin - 10 <= currentWidth-itemsTotalWidth){
        $('.content-products-slides').eq(index).css({marginLeft: currentWidth-itemsTotalWidth});
    }
    else {
        $('.content-products-slides').eq(index).css({marginLeft: currentLeftMargin - 10});
    }
}

function onRightButtonMouseUp(){
    clearTimeout(intervalObj);
}

$(".content-products-left-button").each(function(i, obj){
    $(this).mousedown(function(){
        index = i;
        onLeftButtonMouseDown()
    }).mouseup(function(){
        index = i;
        onLeftButtonMouseUp()
    });
});

$(".content-products-right-button").each(function(i, obj){
    $(this).mousedown(function(){
        index = i;
        onRightButtonMouseDown();
    }).mouseup(function(){
        index = i;
        onRightButtonMouseUp();
    });
});