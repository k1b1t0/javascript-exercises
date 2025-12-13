const sumAll = function(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        return 'ERROR';
    }

    if (a <= 0 || b <= 0) {
        return 'ERROR';
    }

    let bigger = a > b ? a : b;
    let smaller = a > b ? b : a;
    let sum = 0;
    for (let i = smaller; i <= bigger; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
