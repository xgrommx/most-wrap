const most = require('most');
const wrap = require('../build').wrap;

wrap(function *(v) {
    const a = yield new Promise(resolver => setTimeout(() => resolver(v / 10), 1000));
    const b = yield most.of(v / 20).delay(2000);

    return a + b;
})(1000).observe(x => console.log(x));