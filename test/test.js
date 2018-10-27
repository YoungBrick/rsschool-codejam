const assert = require('assert'); 
const sumOfOther = require('../sumOfOther'); 

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