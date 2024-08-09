let num = 5;
let str = "Hello";
let arr = [1, 2, 3];
let obj = { name: "Sumit" };
let n = null;
let notANumber = NaN;

console.log(typeof num);       // Output: "number"
console.log(typeof str);        // Output: "string"
console.log(typeof arr);        // Output: "object"
console.log(typeof obj);        // Output: "object"
console.log(typeof n);          // Output: "object"
console.log(typeof notANumber); // Output: "number"

console.log(Array.isArray(arr)); // Output: true
console.log(Array.isArray(obj)); // Output: false

console.log(Number.isNaN(notANumber)); // Output: true
console.log(Number.isNaN(num));        // Output: false

