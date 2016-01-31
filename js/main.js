+ function ($){
    
    var SnakeGame = function($svg, option){
        this.$svg = $svg
        this.options = option
        
        this.init()
    }
    
    SnakeGame.defaults = {
        colors: {
            background: '#eee',
            snake: '#8cc665'
        }
    }
    
    SnakeGame.prototype.init = function(){
        this.$svg.find('rect.day').attr('fill', this.options.colors.background)
        
        this.snake = {
            color: this.options.color.snake,
            axia: [(0,0), (0,4)]
        }
    }
    
    
    $.snakeGame = function($el, option){
        var options = $.extend({}, SnakeGame.defaults, option)
        new SnakeGame($el, options)
    }
    
    var $svg = $('#contributions-calendar .js-calendar-graph-svg')
    
    if(!$svg.length){
        console.log('Can not found the heatmap svg')
    }else{
        $.snakeGame($svg)
    }
    
}(Zepto)

