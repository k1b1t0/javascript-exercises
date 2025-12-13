const repeatString = function(string, duplication) {
    if (duplication < 0) {
        return 'ERROR'
    }
    let result = ""
    for (let i = 0; i < duplication; i++) {
        result += string
    }
    return result
};

// Do not edit below this line
module.exports = repeatString;
