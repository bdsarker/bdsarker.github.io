const words = ['apple', 'banana', 'cherry', 'grape', 'kiwi', 'orange'];

const getNewArray = function (strArr) {
    return strArr
        .filter(function (str) {
            return str.length >= 5 && str.includes('a');
        })
        .map(function (str) {
            return str.toUpperCase();
        });
};

const filteredAndMapped = getNewArray(words);
console.log(filteredAndMapped);