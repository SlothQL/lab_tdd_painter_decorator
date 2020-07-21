const assert = require('assert')
const Room = require('../room')

describe('room', function() {
    
    let room;

    beforeEach (function(){
        room = new Room(30);
    })

    it('should have an area', function() {
        const actual = room.area;
        assert.strictEqual(actual, 30);
    });

    it('should start not painted', function() {
        const actual = room.painted;
        assert.strictEqual(actual, 0);
    });

    it('should be able to be painted', function() {
        room.getPainted(30)
        const actual = room.painted;
        assert.strictEqual(actual, 30);

    });

});