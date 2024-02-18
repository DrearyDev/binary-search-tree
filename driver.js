import { tree } from "./BST.js";
// script to test out everything i've built //


function randomNumbers(multiplier=100) {
    return Math.floor(Math.random() * multiplier);
};

let keys = new Array(7);

for (let i = 0; i < keys.length; i++) {
    keys[i] = randomNumbers();
};


// --- building tree --- //
let test = tree(keys);

console.log('Current root of the tree:');
console.log(test.getRoot());

// --- checking if tree is balanced --- //

console.log('is tree balanced:');
console.log(test.isBalanced());// true

// --- printing all elements in 'level-Order' --- //
console.log('--------------------------Level Order:');

test.levelOrder(function(node){
    console.log(node);
});

console.log('--------------------------');

// --- printing all elements in 'pre-order' --- //
console.log('--------------------------Pre-Order:');

test.preOrder(function(node){
    console.log(node);
});

console.log('--------------------------');

// --- printing all elements in 'in-order' --- //
console.log('--------------------------In-Order:');

test.inOrder(function(node){
    console.log(node);
});

console.log('--------------------------');

// --- printing all elements in 'post-order' --- //
console.log('--------------------------Post-Order:');

test.postOrder(function(node){
    console.log(node);
});

console.log('--------------------------');

// --- unbalanceing the tree by inserting more numbers --- //
console.log('--------------------------Unbalancing the tree:');

for (let i = 0; i < keys.length; i++) {
    test.insertNode(randomNumbers(10000));
};

console.log('is tree balanced:');
console.log(test.isBalanced());//false

// --- rebalancing the tree --- //
console.log('--------------------------Rebalancing the tree:');

test.reBalance();

console.log('is tree balanced:');
console.log(test.isBalanced());//true

// --- printing all elements in 'level-Order' --- //
console.log('--------------------------Level Order:');

test.levelOrder(function(node){
    console.log(node);
});

console.log('--------------------------');

// --- printing all elements in 'pre-order' --- //
console.log('--------------------------Pre-Order:');

test.preOrder(function(node){
    console.log(node);
});

console.log('--------------------------');

// --- printing all elements in 'in-order' --- //
console.log('--------------------------In-Order:');

test.inOrder(function(node){
    console.log(node);
});

console.log('--------------------------');

// --- printing all elements in 'post-order' --- //
console.log('--------------------------Post-Order:');

test.postOrder(function(node){
    console.log(node);
});

console.log('--------------------------');
