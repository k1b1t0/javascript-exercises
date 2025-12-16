const fibonacci = function(a) {
    a = Number(a)
    if (a == 0) {
        return 0
    }
    if (a < 0) {
        return 'OOPS'
    }
    if (a == 1 || a == 2) {
        return 1
    }
    return fibonacci(a-1) + fibonacci(a-2)
};

// Do not edit below this line
module.exports = fibonacci;
