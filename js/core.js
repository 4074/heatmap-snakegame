+ function(window) {
    var Snake = function(options) {
        this.axis = options.axis
        this.direction = options.direction
    }

    Snake.defaults = {
        axis: [
            [0, 0],
            [4, 0]
        ],
        direction: 'right'
    }

    Snake.prototype.move = function() {
        var axis = this.axis
        switch (this.direction) {
            case 'right':
                axis[0][0]++
                axis[axis.length - 1][0]++
                break;
            case 'left':
                axis[0][0]--
                axis[axis.length - 1][0]--
                break;
            case 'top':
            case 'buttom':
            default:
                break
        }
    }

    var Map = function(area) {
        this.area = area
    }

    Map.prototype.transAxis = function(axis) {
        return axis
    }

    window.Snake = Snake
    window.Map = Map
}(window)
