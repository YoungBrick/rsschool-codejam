const assert = require('assert'); 
const sumOfOther = require('../sumOfOther'); 
const make = require('../make'); 
const recursion = require('../recursion'); 

describe('#sumOfOther()', function() { 
    it('regular', function() { 
        assert.deepEqual(sumOfOther([1, 2, 3, 4]), [9, 8, 7, 6]); 
    }); 
    it('all equal', function() { 
        assert.deepEqual(sumOfOther([1, 1, 1, 1]), [3, 3, 3, 3]); 
    }); 
    it('empty array', function() { 
        assert.deepEqual(sumOfOther([]), []); 
    }); 
});

describe('#make()', function() { 
    function sum(a, b) {
    return a + b;
    }
    it('', function() { 
        assert.equal(make(1)(5)(340)(2)(sum), 348); 
    }); 
    it('', function() { 
        assert.equal(make(4)(5, 14, 48, 53)(2, 7)(6)(sum), 139); 
    }); 
    it('', function() { 
        assert.equal(make(4)(sum), 4); 
    }); 
});

describe('#recursion()', () => { 
    let tree = {"value":100,"left":{"value":90,"left":{"value":70},"right":{"value":99}},"right":{"value":120,"left":{"value":110},"right":{"value":130}}} 
    it('', () => { 
    assert.deepEqual(recursion(tree), [[100], [90, 120], [70, 99, 110, 130]]); 
    }); 
    });