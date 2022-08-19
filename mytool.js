function something(x, y) {
    'use strict';
    if (x === '0') {
        return {
            x: 0
        };
    } else {
        let z = x + y;
        return z;
    }
};

something(1, 2);
