const SELECTED_CLASS_NAME = 'header-top-part-nav-bar-item__selected';

var selectedIndex = 0;

function pointSelected(){
    $('div.nav-bar-item').each(function(i, obj){
        if(this.classList.contains(SELECTED_CLASS_NAME)){
            selectedIndex = i;
        }
    });
}

function nullifySelected(){
    $('div.nav-bar-item').each(function(i, obj){
        this.classList.remove(SELECTED_CLASS_NAME);
    })
}

function markCurrentHoveredAsSelected(obj) {
    obj.classList.add(SELECTED_CLASS_NAME);
}

function markSelected(){
    $('div.nav-bar-item').each(function(i, obj){
        if(i === selectedIndex){
            this.classList.add(SELECTED_CLASS_NAME);
        }
    })
}

function prep(){
    $('div.nav-bar-item').hover(function(){
        pointSelected();
        nullifySelected();
        markCurrentHoveredAsSelected(this);
    }, function(){
        nullifySelected();
        markSelected();
    })
}

prep();