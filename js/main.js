+ function ($){
    var $svg = $('#contributions-calendar .js-calendar-graph-svg')
    
    if(!$svg.length){
        console.log('Can not found the heatmap svg')
    }else{
        $.snakeGame($svg)
    }
    
}(Zepto)

