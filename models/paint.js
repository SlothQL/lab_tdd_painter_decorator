const Paint = function(amount) {
    this.amount = amount;
};

Paint.prototype.isEmpty = function() {
    if (this.amount === 0) {
        return true
    }
    else {
        return false
    }
}

Paint.prototype.empty = function() {
    return this.amount = 0;
}


module.exports = Paint;