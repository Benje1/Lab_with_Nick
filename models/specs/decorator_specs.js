const assert = require('assert');
const Paint = require('../../paint')
const Decorator = require('../../decorator')
const Room = require('../../room')

describe('Decorator', function(){
    let decorator;

    beforeEach(function(){
        paint = new Paint(10)
        paint2 = new Paint(20)
        room = new Room(15)
        decorator = new Decorator();
    })

    it('should have empty stock', function(){
        const actual = decorator.paint.length
        assert.strictEqual(actual, 0)
    });
    it('should have some paint now', function(){
        decorator.addPaint(paint)
        const actual = decorator.paint.length
        assert.strictEqual(actual, 1)
    });
    it('should have 10 liters of paint', function(){
        decorator.addPaint(paint)
        const actual = decorator.calculatePaint()
        assert.strictEqual(actual, 10)
    });
    it('should not have enough paint', function(){
        decorator.addPaint(paint)
        const actual = decorator.checkThereIsEnoughPaint(room)
        assert.strictEqual(actual, false)
    });
    it('should have enough paint', function(){
        decorator.addPaint(paint2)
        const actual = decorator.checkThereIsEnoughPaint(room)
        assert.strictEqual(actual, true)
    });
    it('should paint the room', function(){
        decorator.addPaint(paint2)
        decorator.paintRoom(room)
        const actual = room.isRoomPainted()
        assert.strictEqual(actual, true)
    })
})