function test(int){
    return exampleFunction();
}

function callbackFunc(){
    console.log("Calling the callback function");
    return 5;
}
// function exampleFunction() {
//     return "Hello, World!";
// }
test(5);
//test(callbackFunc());
//test(() => callbackFunc())
