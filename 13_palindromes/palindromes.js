function isAlphaNumeric(str) {
    return /^[a-zA-Z0-9]+$/.test(str);
}

const palindromes = function (str) {
    let start = 0
    let end = str.length - 1

    while (start < end) {
        if (!isAlphaNumeric(str.charAt(start))){
            start++
            continue
        }
        if (!isAlphaNumeric(str.charAt(end))){
            end--
            continue
        }
        if (str.charAt(start).toLowerCase() !== str.charAt(end).toLowerCase()) {
            return false
        }
        start++
        end--
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
