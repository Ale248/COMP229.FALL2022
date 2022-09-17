import {halfOf, multiply} from './lib.js';
// import default function (can name as anything)
import blabla from './lib.js';
console.log("halfOf: " + halfOf(3));
console.log("multiply: " + multiply(3, 5));
blabla();

import {flag, touch} from './validator.js';
console.log(flag); // false
touch(); // change to true
console.log(flag) // true
flag = false; // change to false
console.log(flag); // error