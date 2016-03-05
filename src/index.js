import most from 'most';
import {spawn} from 'most-spawn';

const wrap = most.wrap = function (fn) {
    function createStream (...args) {
        return spawn.call(this, fn.apply(this, args));
    }
    createStream.__generatorFunction__ = fn;

    return createStream;
};

export {
    wrap
};