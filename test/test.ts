import test = require('blue-tape');

import rxNode = require('rx-node');

test('toEventEmitter test', function (t) {
    t.plan(1);
    
    t.equal(rxNode.fromStream());
});