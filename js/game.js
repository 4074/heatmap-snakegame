+ function ($, window){

    var Y_AXIS_MAX = 7

    var SnakeGame = function(map, mapWithDom, option){
        this.map = new Map(map)
        this.mapWithDom = mapWithDom
        this.snake = new Snake({
            axis: [
                [0, 0],
                [4, 0]
            ],
            direction: 'right'
        })

        this.options = option
        this.interval = null

        this.init()
    }

    SnakeGame.defaults = {
        colors: {
            background: '#eee',
            snake: '#8cc665'
        }
    }

    SnakeGame.prototype.init = function(){
        var self = this
        this.mapWithDom.forEach(function(group){
            group.forEach(function(item){
                item && item.attr('fill', self.options.colors.background)
            })
        })
        // this.$grids = this.findGrids()

        // this.snake = {
        //     color: this.options.colors.snake,
        //     axis: [[0,0], [4,0]],
        //     direction: 'right'
        // }

        this.startGame()
    }

    SnakeGame.prototype.findGrids = function(){
        var $g = this.$svg.find('g')
        var $rects = []
        $g.each(function(){
            var $r = $(this).find('rect')
            if($r.length === Y_AXIS_MAX){
                $r.each(function(){
                    $rects.push($(this))
                })
            }
        })
        return $rects
    }

    SnakeGame.prototype.startGame = function(){
        var self = this
        this.renderSnake()

        this.interval = setInterval(function(){
            self.moveSnake()
        }, 1000)
    }

    SnakeGame.prototype.renderSnake = function(){
        if(!this.snake || !this.snake.axis) return;

        var axis = this.snake.axis
        var x1, y1, x2, y2
        for(var i=0; i<axis.length; i++){
            if(typeof x1 === 'undefined'){
                x1 = axis[i][0]
                y1 = axis[i][1]
            }else{
                if(typeof x2 !== 'undefined'){
                    x1 = x2
                    y1 = y2
                }

                x2 = axis[i][0]
                y2 = axis[i][1]

                if(x1 === x2){
                    var s = Math.min(y1, y2)
                    var e = Math.max(y1, y2)

                    while(s <= e){
                        this.fillGrid(x1, s, this.options.colors.snake)
                        s++
                    }

                }else if(y1 === y2){
                    var s = Math.min(x1, x2)
                    var e = Math.max(x1, x2)

                    while(s <= e){
                        this.fillGrid(s, y1, this.options.colors.snake)
                        s++
                    }
                }
            }
        }
    }

    SnakeGame.prototype.moveSnake = function(){
        var lastAxis = this.snake.axis[0].slice()
        this.snake.move()
        var axis = this.map.transAxis(this.snake.axis)
        console.log(lastAxis)
        this.fillGrid(lastAxis[0], lastAxis[1], this.options.colors.background)
        this.renderSnake()
    }

    SnakeGame.prototype.fillGrid = function(x, y, color){
        var grid = this.mapWithDom[x][y]
        if(grid && grid.attr('fill') !== color){
            grid.attr('fill', color)
        }
    }

    $.snakeGame = function(map, mapWithDom, option){
        var options = $.extend({}, SnakeGame.defaults, option)
        console.log(options)
        new SnakeGame(map, mapWithDom, options)
    }

}(Zepto, window)
