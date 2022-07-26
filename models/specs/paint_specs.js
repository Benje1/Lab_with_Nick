const assert = require('assert');
const Paint = require('../../paint');

describe('Paint', function(){
    let paint;

    beforeEach(function(){
        paint = new Paint(10)
    });
    it('there should be paint', function(){
        const actual = paint.liters
        assert.strictEqual(actual, 10)
    });
    it('should have less paint in it', function(){
        paint.emptySelf(5)
        const actual = paint.liters
        assert.strictEqual(actual, 5)

    })
    it('should be empty', function(){
        paint.emptySelf(10)
        const actual = paint.checkIfEmpty()
        assert.strictEqual(actual, true)
    })

})