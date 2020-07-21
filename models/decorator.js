const Decorator = function () {
    this.stock = [];
}

Decorator.prototype.numberOfPaints = function () {
    return this.stock.length;
}

Decorator.prototype.addPaint = function (paint) {
    return this.stock.push(paint)
}

Decorator.prototype.numberOfLitres = function() {
    let total = 0;
    for (paint of this.stock) {
        total += paint.amount
    }
    return total;
}

Decorator.prototype.isEnoughPaint = function(room) {
    return (this.numberOfLitres() >= room.area) ? true : false;
}

Decorator.prototype.paintRoom = function(room) {
    if (this.isEnoughPaint(room)) {
        for (paint of this.stock) {
            let areaToPaint = (room.area - room.painted);
            if (areaToPaint >= paint.amount) {
                room.painted += paint.amount;
                paint.amount = 0;
            } else {
                paint.amount -= areaToPaint;
                room.painted = room.area;
            }
        }
    }
};




module.exports = Decorator;