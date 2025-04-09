const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js')+'');

//function that uses the reverse function to flip a copy of the first k+1 elements
function testerFlip(arr, k) {
    const front = arr.slice(0, k + 1)
    const frontReversed = front.reverse();
    const end = arr.slice(k + 1);
    const reversed = frontReversed.concat(end);
    return reversed;
}

const testSort =
    jsc.forall("array nat", function(arr) {
        var a1 = JSON.parse(JSON.stringify(arr));
        var a2 = JSON.parse(JSON.stringify(arr));
        return JSON.stringify(pancakeSort(a1)) ==
            JSON.stringify(a2.sort(function(a, b)
                { return a - b; }));
    });

jsc.assert(testSort);

const testFlip =
    jsc.forall("array nat", "nat", function(arr, k) {
        k = Math.min(k, arr.length - 1);            //make sure k is in range
        var a1 = JSON.parse(JSON.stringify(arr));   //array to test with pancakeSort flip
        var a2 = JSON.parse(JSON.stringify(arr));   //array to test with testerFlip
        return JSON.stringify(flip(a1, k)) ==       //compare results of the two flip functions
            JSON.stringify(testerFlip(a2, k));
    });

jsc.assert(testFlip);

