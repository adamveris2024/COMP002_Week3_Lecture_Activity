/****************Function 1**********************/

function myGreeting(i){
    console.log("Hello, " + i);
}

myGreeting("User");

/****************Function 2*********************/

function printCircumference(num){
    console.log(num * 3.14);
}

printCircumference(10);

/***************Function 3***********************/

function printHelloWorld1() {
    console.log("Hello World! 1");
    printHelloWorld2();
}

function printHelloWorld2() {
    console.log("Hello World! 2");
}

printHelloWorld1();
printHelloWorld2();

/*************Function 4***************/

myGreeting("User") // It follows the last call I did, nothing changes about it

/**************Function 5*******************/

function theInfiniteLoop(){
    return theInfiniteCycle();
}
function theInfiniteCycle(){
    return theInfiniteLoop();
}

theInfiniteLoop()