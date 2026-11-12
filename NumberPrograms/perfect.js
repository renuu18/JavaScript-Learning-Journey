
const n = 6;
let sum = 0;

for (let i = 1; i < n; i++) {
    if (n % i === 0) {
        sum = sum + i;
    }
}

if (n === sum) {
    console.log("Perfect Number");
} else {
    console.log("Not a Perfect Number");
}
