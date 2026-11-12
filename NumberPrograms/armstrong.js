
const n = 153;
let org = n;
let sum = 0;
let count = String(n).length;

while (org > 0) {
    let d = org % 10;
    let power = Math.pow(d, count);
    sum = sum + power;
    org = Math.floor(org / 10);
}

if (n == sum) {
    console.log("Armstrong Number");
} else {
    console.log("Not an Armstrong Number");
}
