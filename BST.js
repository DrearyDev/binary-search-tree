'use strict';

import { mergeSort } from "./mergeSort.js";

function node(value) {
    let data = value;
    let left = null;
    let right = null;

    return { data, left, right };
};

function tree(arr) {
    const buildTree = (arr) => {
        let array = mergeSort(arr);//sort the array
        array = [...new Set(array)];//remove duplicate values

        let start = 0;
        let end = array.length - 1;
        let mid = Math.floor((array.length) / 2);

        if (start > end) { return null };

        let root = node(array[mid]);
        root.left = buildTree([...array].splice(start, mid));//non-inclusive so mid isnt apart of array
        root.right = buildTree([...array].splice(mid+1, end));//add one to avoid including mid

        return root;
    };
    let root = buildTree(arr);
    

    return { root, buildTree };
};

let test = tree([1,2,3,4,5,6,7]);

console.log(test.root);

