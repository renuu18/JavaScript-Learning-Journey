
const n = 18;
let org = n;
let sum = 0;

while (org > 0) {
    let d = org % 10;
    sum = sum + d;
    org = Math.floor(org / 10);
}

if (n % sum === 0) {
    console.log("Harshad Number");
} else {
    console.log("Not a Harshad Number");
}
