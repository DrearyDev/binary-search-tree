import { tree } from "./BST.js";
// script to test out everything i've built //


function randomNumbers(multiplier=100) {
    return Math.floor(Math.random() * multiplier);
};

let keys = new Array(7);

for (let i = 0; i < keys.length; i++) {
    keys[i] = randomNumbers();
};
