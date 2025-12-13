const removeFromArray = function(array, ...others) {
    let removeFromArray = others;
    for (let i = array.length - 1; i >= 0; i--) {
        if (removeFromArray.includes(array[i])) {
            array.splice(i, 1)
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
