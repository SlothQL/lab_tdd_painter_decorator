const Room = function(area) {
    this.area = area;
    this.painted = 0;
};

Room.prototype.getPainted = function (litres) {
    return this.painted += litres;
}

module.exports = Room;