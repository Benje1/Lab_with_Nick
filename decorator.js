const Decorator = function() {
    this.paint = []
};

Decorator.prototype.addPaint = function(paint){
    this.paint.push(paint)
}
Decorator.prototype.calculatePaint = function(){
    let sum = 0
    for (let i = 0; i <this.paint.length; i++) {
        sum += this.paint[i].liters;
    }
    return sum
}
Decorator.prototype.checkThereIsEnoughPaint = function(room){
    liters = this.calculatePaint()
    if (liters >= room.area){
        return true
    } else {
        return false
    }
}
Decorator.prototype.paintRoom = function(room){
    if (this.checkThereIsEnoughPaint() === true){
        room.paintRoom(this.calculatePaint)
    }
}

module.exports = Decorator;