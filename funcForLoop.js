// Katas Functions and For Loops //

// #1 Write a function named "add" that takes two arguments and returns their sum.
// You may use built-in operators to finish the definition.
// Display the result of calling add(2, 4), which should be 6.
const num1 = document.createElement("div");
function add(e,f){
    return e+f;
    // console.log(add);
}
let e=2;
let f=4;
num1.textContent = add(e,f);
document.body.appendChild(num1);

// #2 Write a function named "multiply" that takes two arguments and returns their product.
// You may not use built-in arithmetic operators or functions. Instead, you'll need a for loop which calls the "add" function you wrote earlier.
// Display the result of calling multiply(6, 8), which should be 48.
const num2 = document.createElement("div");
let a=6;
let b=8;
let sum2=0;
for (i=0; i<b; i++){
    sum2=sum2+a;
}
num2.textContent = sum2;
document.body.appendChild(num2);
// ** I don't understand why line 26 isn't
// ** for (i=0; i<=b; i++){

// #3 Write a function named "power" that takes two arguments (x and n) and returns the the result of raising x to the nth power.
// You may not use built-in arithmetic operators or functions. Instead, use functions you wrote in earlier katas to write this function.
// Display the result of calling power(2, 8), which should be 256.
const num3 = document.createElement("div");
let x=2;
let n=8;
let product=1;

function power(){
product = product * x;
}
for (i=0; i<n; i++){
power();
}
num3.textContent = product;
document.body.appendChild(num3);
// ** I'm not sure how I came up with this, but it works! 

// #4 Write a function named "factorial" that takes a single argument and returns the factorial of that argument.
// You may not use built-in arithmetic operators or functions. Instead, use functions you wrote in earlier katas to write this function.
// Display their result of calling factorial(4), which should be 24 (4 * 3 * 2 * 1).
const num4 = document.createElement("div");
let z=4;
let prod4=1
function factorial(){
prod4 = prod4*i;
}
for (i=z; i>0; i--){
factorial();
}
num4.textContent = prod4;
document.body.appendChild(num4);

// #5 Write a function named "fibonacci" that takes an argument n and returns the nth, Fibonacci number (Links to an external site.)Links to an external site. (click me!).
// You may not use built-in arithmetic operators or functions. Instead, use functions you wrote in earlier katas to write this function.
// Display the result of calling fibonacci(8), which should be 13:
// 0 1 1 2 3 5 8 [13] 21
// The number in brackets is the 8th fibonacci number.
const num5 = document.createElement("div");
numOfTimes = 8;
fibNum = 0;
newNum = 1;
origNum = 0;
function fibonacci(){
    fibNum = origNum + newNum;
    origNum = newNum;
    newNum = fibNum;
}
    if(numOfTimes>2){
        for (i=2; i<numOfTimes; i++){
            fibonacci();
        }
    }else if(numOfTimes===2){
        fibNum = 1;
    }else{
        fibNum = 0;
    }
num5.textContent = fibNum;
document.body.appendChild(num5)

