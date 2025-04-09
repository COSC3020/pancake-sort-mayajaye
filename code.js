//Maya Conway
//code.js
//Pancake Sort
//4-9-25

function flip(array, k) { //uses a while loop to swap elements from opposite sides of the subarray
    let i = 0;
    let j = k;
    while (i < j) {
        let tmp = array[i];
        array[i] = array[j];
        array[j] = tmp;
        i++; j--; //move to the middle
    }
    return array;
}

function pancakeSort(array, n = array.length) {
    if (n <= 1) return array;

    let hi = 0;
    for (let i = 1; i < n; i++) {
        if (array[i] > array[hi]) hi = i; //find the greatest element in the current subarray
    }

    flip(array, hi);    //flip the array to put the greatest element at the top
    flip(array, n - 1); //flip the greatest element to its position

    return pancakeSort(array, n - 1); //recursively sort the left subarrays
}
