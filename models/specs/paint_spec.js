const assert = require('assert')
const Paint = require('../paint')

describe('Paint', function () {

    let paint;

    beforeEach(function () {
        paint = new Paint(10);
    })

    it('should have an amount of paint', function () {
        const actual = paint.amount;
        assert.strictEqual(actual, 10);
    })

    it('should be able to check if it is empty', function() {
        const actual = paint.isEmpty();
        assert.strictEqual(actual, false);
    });

    it('should be able to empty itself of paint', function () {
        paint.empty();
        const actual = paint.isEmpty();
        assert.strictEqual(actual, true);
    });
    
    it('should be able to reduce amount of paint', function () {
        paint.reduceAmount(5);
        const actual = paint.amount;
        assert.strictEqual(actual, 5);
    });

});