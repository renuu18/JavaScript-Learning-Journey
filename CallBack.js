
// ========================================
// JavaScript Callback Functions
// ========================================


// Example 1: Calculator using Callback Functions

function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mul(a, b) {
    return a * b;
}

function calculate(a, b, callback) {
    return callback(a, b);
}

console.log("----- Calculator Operations -----");

console.log("Addition:", calculate(10, 20, add));
console.log("Subtraction:", calculate(10, 20, sub));
console.log("Multiplication:", calculate(10, 20, mul));


// Example 2: Area Calculation using Callback Functions

function circleArea(radius) {
    return Math.PI * radius * radius;
}

function squareArea(side) {
    return side * side;
}

function equilateralTriangleArea(side) {
    return (Math.sqrt(3) / 4) * side * side;
}

function calculateArea(value, callback) {
    return callback(value);
}

console.log("\n----- Area Calculations -----");

console.log("Circle Area:", calculateArea(5, circleArea));
console.log("Square Area:", calculateArea(5, squareArea));
console.log("Equilateral Triangle Area:", calculateArea(5, equilateralTriangleArea));
