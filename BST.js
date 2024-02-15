'use strict';

function node(value) {
    let data = value;
    let left = null;
    let right = null;

    return { data, left, right };
};

function tree(arr) {
    let root = buildTree(arr);

    return { root };
};
