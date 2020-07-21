const assert = require('assert')
const Decorator = require('../decorator')
const Paint = require('../paint.js')
const Room = require('../room.js')

describe('decorator', function() {
    
    let decorator;
    let paint;
    let room;
    let room2;

    beforeEach(function(){
        decorator = new Decorator();
        paint = new Paint(7);
        paint2 = new Paint(7);
        room = new Room(30);
        room2 = new Room(10);
    })

    it('should start with empty stock', function(){
        const actual = decorator.stock;
        assert.deepStrictEqual(actual, []);
    });

    it('should be able to add paint to paint stock', function() {
        decorator.addPaint(paint);
        const actual = decorator.numberOfPaints();
        assert.strictEqual(actual, 1);
    })

    it('should be able to calculate how much total paint it has in stock', function () {
        decorator.addPaint(paint);
        decorator.addPaint(paint);
        const actual = decorator.numberOfLitres();
        assert.strictEqual(actual, 14);
    })

    it('should be able to check if it has enough paint for room', function () {
        decorator.addPaint(paint);
        decorator.addPaint(paint2);
        const actual = decorator.isEnoughPaint(room);
        assert.strictEqual(actual, false);
    });

    it('should be able to paint room if enough paint', function() {
        decorator.addPaint(paint);
        decorator.addPaint(paint2);
        decorator.paintRoom(room2);
        assert.strictEqual(decorator.numberOfLitres(), 4);
        assert.strictEqual(room2.painted, 10)
    });
    
    it('should be able to remove empty cans', function() {
        decorator.addPaint(paint);
        decorator.addPaint(paint2);
        decorator.paintRoom(room2);
        decorator.removeEmptyPaint();
        const actual = decorator.numberOfPaints();
        assert.strictEqual(actual, 1)
    })

});