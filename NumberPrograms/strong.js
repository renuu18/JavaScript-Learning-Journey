
const n = 145;
let org = n;
let sum = 0;

while (org > 0) {
    let d = org % 10;
    let fact = 1;

    for (let i = 1; i <= d; i++) {
        fact = fact * i;
    }

    sum = sum + fact;
    org = Math.floor(org / 10);
}

if (n === sum) {
    console.log("Strong Number");
} else {
    console.log("Not a Strong Number");
}
