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



    function insertNode(value, startNode=root) {
        //does nothing with duplicate numbers
        if (startNode === null) {
            startNode = node(value);
            return startNode;
        };

        if (value < startNode.data) {
            startNode.left = insertNode(value, startNode.left);
        } else if (value > startNode.data) {
            startNode.right = insertNode(value, startNode.right);
        };

        return startNode;
    };



    function deleteNode(value, startNode=root) {
        if (startNode === null) { return startNode };

        //recursively searching for node to delete
        if (value < startNode.data) {
            startNode.left = deleteNode(value, startNode.left);
            return startNode;
        } else if (value > startNode.data) {
            startNode.right = deleteNode(value, startNode.right);
            return startNode;
        };

        // --- at this point root = node to delete --- //

        // if node to delete has no children
        if (startNode.left === null && startNode.right === null) {
            startNode = null;
            return startNode;
        } else {
            let parent = startNode;
            let child = startNode.right;

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
            startNode.data = child.data;

            return startNode;
        };
    };



    function findNode(value, startNode=root) {
        if (startNode === null) { return null };

        if (value < startNode.data) {
            startNode = findNode(value, startNode.left);
            return startNode;
        } else if (value > startNode.data) {
            startNode = findNode(value, startNode.right);
            return startNode;
        };

        return startNode;
    };



    function levelOrder(callback, startNode=root) {
        if (startNode === null) { return };

        let queue = [startNode];

        while (queue[0]) {
            callback(queue[0]);

            if (startNode.left !== null) { queue.push(queue[0].left) };

            if (startNode.right !== null) { queue.push(queue[0].right) };

            queue.shift();
        };
    };



    function preOrder(callback, startNode=root) {
        if (startNode === null) { return };

        callback(startNode);
        preOrder(callback, startNode.left);
        preOrder(callback, startNode.right);
    };



    function inOrder(callback, startNode=root) {
        if (startNode === null) { return };

        inOrder(callback, startNode.left);
        callback(startNode);
        inOrder(callback, startNode.right);
    };



    function postOrder(callback, startNode=root) {
        if (startNode === null) { return };

        postOrder(callback, startNode.left);
        postOrder(callback, startNode.right);
        callback(startNode);
    };



    function height(node=root) {
        if (node === null) { return -1 };

        let leftHeight = height(node.left);
        let rightHeight = height(node.right);

        if (leftHeight > rightHeight) {
            return leftHeight + 1;
        } else {
            return rightHeight + 1
        };
    };
    
    return { root, insertNode, deleteNode, findNode, levelOrder, preOrder, inOrder, postOrder,
    height };
};

let test = tree([1,2,3,4,5,6,7]);

console.log(test.root);

console.log(test.insertNode(0));

console.log(test.deleteNode(0));

console.log(test.findNode(3));

test.levelOrder(function(node){
    console.log(node.data);
});

test.preOrder(function(node){
    console.log(node);
});

test.inOrder(function(node){
    console.log(node.data);
});

test.postOrder(function(node){
    console.log(node);
});

console.log(test.height());


/*
preOrder:
<root><left><right

inOrder:
<left><root><right>

postOrder:
<left><right><root>
*/

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
