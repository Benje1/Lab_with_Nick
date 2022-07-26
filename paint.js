const Paint = function(liters){
    this.liters = liters
}

Paint.prototype.checkIfEmpty = function(){
    if (this.liters === 0 || this.liters === undefined){
        return true
    }
}

Paint.prototype.emptySelf = function(amount){
    this.liters -= amount
}

module.exports = Paint;