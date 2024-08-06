// 1 . What is the difference between ++i and i++?
let i = 1;
console.log(++i); 
console.log(i);  

let j = 1;
console.log(j++); 
console.log(j);  

//2. What do you think would happen if you pass an index beyond the range of the string? Or if you pass a negative index? Try it out.
const str = "hello";
console.log(str[10]); 

console.log(str[-1]); 


// Do you think JSON.stringify would work for arrays as well? What about nested objects? What happens if we pass numbers, strings, undefined, null to JSON.stringify?


const arr = [1, 2, 3];
console.log(JSON.stringify(arr));

const obj = { a: 1, b: { c: 2 } };
console.log(JSON.stringify(obj));

console.log(JSON.stringify(123));

console.log(JSON.stringify("hello"));

console.log(JSON.stringify(undefined)); 

console.log(JSON.stringify(null));

//What happens if you pass a regular/invalid JSON string to JSON.parse? What will happen if such an invalid function runs in the program? Will other parts of the code execute correctly after that?
try {
     JSON.parse("invalid json");
  } catch (e) {
    console.error("Caught an error:", e);
  }
  console.log("This will still execute.");
  


