function test(callback){
    return callback();
}

function callbackFunc(){
    console.log("Calling the callback function");
    return 5;
}

test(callbackFunc);
test(callbackFunc());
//test(() => callbackFunc())
