const assert = require('assert');
const Paint = require('../../paint')
const Room = require('../../room')

describe('Room', function(){
    let room;

    beforeEach(function(){
        paint = new Paint(10)
        room = new Room(20, paint)
    });
    
    it('should have an area', function(){
        const actual = room.area
        assert.strictEqual(actual, 20)
    });
    it('room shoud not be painted', function(){
        const actual = room.painted
        assert.strictEqual(actual, 0)
    });
    it('shold be painted', function(){
        room.paintRoom(10)
        const actual = room.painted
        assert.strictEqual(actual, 10)
    })
})