//challenge by leetcode
//answer by Eleanor

/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    let counter = -1;
    return function() {
        counter++;
        return n + counter;
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */