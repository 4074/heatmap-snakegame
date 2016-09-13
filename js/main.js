+ function ($){
    var $svg = $('.js-calendar-graph-svg')
    var map = []
    var mapWithDom = []
    var rowCount = 7
    var $g = $svg.find('g g')

    $g.each(function(index){
        var row = []
        var rowWithDom = []
        var $rect = $(this).find('rect')

        for (var i=0; i<rowCount; i++) {
            if (i < rowCount - $rect.length) {
                row.push(-1)
                rowWithDom.push(null)
            } else {
                row.push(0)
                rowWithDom.push($($rect[i - (rowCount - $rect.length)]))
            }
        }
        map.push(index < 52 ? row : row.reverse())
        mapWithDom.push(index < 52 ? rowWithDom : rowWithDom.reverse())
    })


    console.log(map)
    console.log(mapWithDom)

    if(!$svg.length){
        console.log('Can not found the heatmap svg')
    }else{
        // $.snakeGame(map, mapWithDom)
    }

}(Zepto)
