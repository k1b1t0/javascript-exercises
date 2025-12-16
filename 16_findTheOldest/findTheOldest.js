const findTheOldest = function(people) {
    return people.reduce((obj, item) => {
        let objAge, itemAge
        if ('yearOfDeath' in obj) {
            objAge = obj.yearOfDeath - obj.yearOfBirth
        } else {
            objAge = 2025 - obj.yearOfBirth
        }
        if ('yearOfDeath' in item) {
            itemAge = item.yearOfDeath - item.yearOfBirth
        } else {
            itemAge = 2025 - obj.yearOfBirth
        }
        if (itemAge > objAge) {
            return item
        }
        return obj
    }, people[0])
};

// Do not edit below this line
module.exports = findTheOldest;
