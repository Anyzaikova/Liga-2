// 1 задача
function func2 (number) {
    function sum (newNumber) {
        if (typeof newNumber === 'undefined') {
            newNumber = 0;
        }
        if (typeof number === 'undefined') {
            number = 0;
        }
        if (typeof newNumber === 'number') {
            number = number + newNumber;
            return sum;
        } else {
            return number;
        }
    }

    sum.toString = function () {
        return number;
    }
    return sum;
}

const result = func2 () (4) () (10);
console.log (result.toString ());

// 2 задача

const str = 'one.two.three.four.five';

function func1 (str) {
    let array = str.split ('.');
    let i = -1;

    function recursiveCall (obj1) {
        let obj2 = {};
        ++i;
        while (i < array.length) {
            obj1[array[i]] = recursiveCall (obj2);
        }
        return obj1;
    }

    let result = {};
    recursiveCall (result);
    return result;
}

console.log (func1 (str));
