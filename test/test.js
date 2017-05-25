const assert = require('chai').assert;
const Queue = require('../src/index.js');

const LENGTH = 999;

describe('Queue', () => {
    let queue = new Queue();

    it('should push', () => {
        for (let i = 0; i < LENGTH; ++i) {
            queue.push(i);
        }
        assert.equal(LENGTH, queue.length);
    });

    it('should unshift', () => {
        for (let i = 0; i < LENGTH; ++i) {
            queue.unshift(i);
        }
        assert.equal(LENGTH * 2, queue.length);
    });

    it('should shift', () => {
        for (let i = LENGTH - 1; i >= 0; --i) {
            let data = queue.shift();
            assert.equal(i, data);
        }
        for (let i = 0; i < LENGTH; ++i) {
            let data = queue.shift();
            assert.equal(i, data);
        }
    });

    it('should not shift if queue is empty', () => {
        let data;
        assert.doesNotThrow(() => {
            data = queue.shift();
        });
        assert.equal(0, queue.length);
        assert.equal(null, data);
    });
});
