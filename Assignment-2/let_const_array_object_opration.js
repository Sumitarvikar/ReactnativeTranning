let arrlet = [1,2,3,4];
const arrconst = [6,7,8,9];

arrlet.push(5);
arrconst.push(10);
console.log(arrlet);     // output [ 1, 2, 3, 4, 5 ]
console.log(arrconst);   // output [ 6, 7, 8, 9, 10 ]

arrlet.pop();
arrconst.pop();
console.log(arrlet);      // output [ 1, 2, 3, 4 ]
console.log(arrconst);    // output [ 6, 7, 8, 9 ]

arrlet = [11,22,33,44];    
//arrconst = [8,9,10];          TypeError: Assignment to constant variable.
console.log(arrlet);            // output [ 11, 22, 33, 44 ]


//For object 

let objLet = {name : "Sumit"};
const objConst = {name : "Sumit"};

objLet.age = "30";
objConst.age = 40 ;

console.log(objLet);      // output - { name: 'Sumit', age: '30' }
console.log(objConst);    // output - { name: 'Sumit', age: 40 }

// Observation -  we cannot reassign value to const 
