// Katas Functions and For Loops //

// #1 Write a function named "add" that takes two arguments and returns their sum.
// You may use built-in operators to finish the definition.
// Display the result of calling add(2, 4), which should be 6.
const num1 = document.createElement("div");
function add(e, f) {
    return e + f;
    // console.log(add);
}

// num1.textContent = add(e,f);
num1.textContent = add(2, 4);
document.body.appendChild(num1);

// #2 Write a function named "multiply" that takes two arguments and returns their product.
// You may not use built-in arithmetic operators or functions. Instead, you'll need a for loop which calls the "add" function you wrote earlier.
// Display the result of calling multiply(6, 8), which should be 48.
const num2 = document.createElement("div");

function multiply(a, b) {
    let sum2 = 0;
    for (let i = 0; i < b; i++) {
        sum2 = add(sum2, a);
    }
    return sum2;
}
num2.textContent = multiply(6, 8);
document.body.appendChild(num2);
// ** I don't understand why line 26 isn't
// ** for (i=0; i<=b; i++){

// #3 Write a function named "power" that takes two arguments (x and n) and returns the the result of raising x to the nth power.
// You may not use built-in arithmetic operators or functions. Instead, use functions you wrote in earlier katas to write this function.
// Display the result of calling power(2, 8), which should be 256.
const num3 = document.createElement("div");

function power(a, b) {
    let sum2 = 1;
    for (let i = 0; i < b; i++) {
        sum2 = multiply(sum2, a);
    }
    return sum2;
}

num3.textContent = power(2, 8);
document.body.appendChild(num3);
// ** I'm not sure how I came up with this, but it works! 

// #4 Write a function named "factorial" that takes a single argument and returns the factorial of that argument.
// You may not use built-in arithmetic operators or functions. Instead, use functions you wrote in earlier katas to write this function.
// Display their result of calling factorial(4), which should be 24 (4 * 3 * 2 * 1).
const num4 = document.createElement("div");

function factorial(a) {
    let fact = 1;
    for (let i = 1; i <= a; i++) {
        fact = multiply(fact, i);
    }
    return fact;
}
num4.textContent = factorial(4);
document.body.appendChild(num4);

// #5 Write a function named "fibonacci" that takes an argument n and returns the nth, Fibonacci number (Links to an external site.)Links to an external site. (click me!).
// You may not use built-in arithmetic operators or functions. Instead, use functions you wrote in earlier katas to write this function.
// Display the result of calling fibonacci(8), which should be 13:
// 0 1 1 2 3 5 8 [13] 21
// The number in brackets is the 8th fibonacci number.
const num5 = document.createElement("div");
function fibonacci(n){
    let arr = [0,1];
    for (let i=2; i<n; i++){
        arr.push(add(arr[i-1],arr[i-2]));
    }
    return arr[arr.length-1];
}
num5.textContent = fibonacci(8);
document.body.appendChild(num5);


