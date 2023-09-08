const numbers = [10, 25, 5, 30, 15];
function sum(arr) {
    return arr.reduce(function (accumulator, item) {
        if (item > 20) {
            return accumulator + item;
        } else {
            return accumulator;
        }
    }, 0);
}


const result = sum(numbers);
console.log(result);