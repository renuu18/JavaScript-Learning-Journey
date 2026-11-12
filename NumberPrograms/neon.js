
const n = 9;
let square = n * n;
let sum = 0;

while (square > 0) {
    let d = square % 10;
    sum = sum + d;
    square = Math.floor(square / 10);
}

if (sum === n) {
    console.log("Neon Number");
} else {
    console.log("Not a Neon Number");
}
