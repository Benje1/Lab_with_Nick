const Room = function(area, paint){
    this.area = area 
    this.paint = paint
    this.painted = 0
}

Room.prototype.paintRoom = function(amount){
    this.painted += amount
    this.paint.liters -= amount
}
Room.prototype.isRoomPainted = function(){
    if (this.area <= this.painted) {
        return true
    }
}


module.exports = Room;