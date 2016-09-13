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

    var Game = function(map) {
        this.map = map
        this.current = map
    }

    Game.prototype.fixAxis = function(axis) {
        return axis
    }

    Game.prototype.renderSnakeToMap = function () {
        if (!this.snake || !this.snake.axis) return;

        var axis = this.snake.axis
        var x1, y1, x2, y2
        for (var i = 0; i < axis.length; i++) {
            if (typeof x1 === 'undefined') {
                x1 = axis[i][0]
                y1 = axis[i][1]
            } else {
                if (typeof x2 !== 'undefined') {
                    x1 = x2
                    y1 = y2
                }

                x2 = axis[i][0]
                y2 = axis[i][1]

                if (x1 === x2) {
                    var s = Math.min(y1, y2)
                    var e = Math.max(y1, y2)

                    while (s <= e) {
                        this.fillGrid(x1, s, this.options.colors.snake)
                        s++
                    }

                } else if (y1 === y2) {
                    var s = Math.min(x1, x2)
                    var e = Math.max(x1, x2)

                    while (s <= e) {
                        this.fillGrid(s, y1, this.options.colors.snake)
                        s++
                    }
                }
            }
        }
    }

    window.Snake = Snake
    window.Map = Map
}(window)
