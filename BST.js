'use strict';

import { mergeSort } from "./mergeSort.js";

function node(value) {
    let data = value;
    let left = null;
    let right = null;

    return { data, left, right };
};

function tree(arr) {
    let root = buildTree(arr);
    
    return root;
};

function buildTree(arr) {
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

function insert(value, root) {
    //does nothing with duplicate numbers
    if (root === null) {
        root = node(value);
        return root;
    };

    if (value < root.data) {
        root.left = insert(value, root.left);
    } else if (value > root.data) {
        root.right = insert(value, root.right);
    };

    return root;
};

function deleteNode(value, root) {
    if (root === null) { return root };

    //recursively searching for node to delete
    if (value < root.data) {
        root.left = deleteNode(value, root.left);
        return root;
    } else if (value > root.data) {
        root.right = deleteNode(value, root.right);
        return root;
    };

    // --- at this point root = node to delete --- //

    // if node to delete has no children
    if (root.left === null && root.right === null) {
        root = null;
        return root;
    } else {
        let parent = root;
        let child = root.right;

        //get left most leaf of right child of node to delete
        while (child.left !== null) {
            parent = child;
            child = child.left;
        };

        //get rid of the node thats replacing the root
        if (child.data < parent.data) {
            parent.left = null;
        } else {
            parent.right = null;
        };

        //replace the root with value of left most leaf of right child
        root.data = child.data;

        return root;
    };
};

let test = tree([1,2,3,4,5,6,7]);

console.log(insert(0, test));

console.log(deleteNode(4, test));

/*
deleteNode(2, 4)
    deleteNode(2, 2)
        parent = 2
        child = 3

        parent.right(3) = null

        root = 3

        return 2;
    return 4;
*/
