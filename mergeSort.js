'use strict';

// modifies original array //
function mergeSort(arr) {

    if (arr.length > 1) {
        let mid = Math.floor((arr.length) / 2);
        let left = [...arr].splice(0, mid);
        let right = [...arr].splice(mid);

        mergeSort(left);
        mergeSort(right);

        let i = 0;
        let j = 0;
        let k = 0;

        while ((i < left.length && j < right.length)) {
            if (left[i] < right[j]) {
                arr[k++] = left[i++];
            } else {
                arr[k++] = right[j++];
            };
        };

        for (; i < left.length; i++) {
            arr[k++] = left[i];
        };

        for (; j < right.length; j++) {
            arr[k++] = right[j];
        };
    };

    return arr;
};

export { mergeSort };