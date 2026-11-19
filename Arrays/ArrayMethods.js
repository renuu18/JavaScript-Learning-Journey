```javascript
// Array initialization
let arr = ["Renu", "Varsh", "Sai", "Stalin"];

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr);

// Arrays can store different data types
let mixedArr = ["Renu", 53.3, 5.6, true, "10kCoders"];
console.log(mixedArr);

// Array constructor
let nums = new Array(5);

nums[0] = 10;
nums[1] = 20;
nums[2] = 30;
nums[3] = 40;
nums[4] = 50;

console.log(nums);

// Array traversal
for (let i = 0; i < nums.length; i++) {
    console.log(nums[i]);
}

// Reverse traversal
for (let i = nums.length - 1; i >= 0; i--) {
    console.log(nums[i]);
}

// for...of loop
for (let x of nums) {
    console.log(x);
}

// Adding and removing elements
nums.push(60);
console.log(nums);

nums.unshift(5);
console.log(nums);

nums.pop();
console.log(nums);

nums.shift();
console.log(nums);

// splice(start, deleteCount, elements)
let res = nums.splice(2, 1);
console.log(nums);
console.log(res);

nums.splice(2, 0, 30);
console.log(nums);

nums.splice(0, 0, 1, 2, 3, 4, 5);
console.log(nums);

nums.splice(0, 5);
console.log(nums);

// slice(start, end) does not modify original array
console.log(nums.slice(1, 3));

// Searching methods
console.log(nums.indexOf(40));
console.log(nums.indexOf(90));
console.log(nums.lastIndexOf(50));
console.log(nums.includes(30));

// Iteration methods
let arr1 = [1, 4, 9, 16];

// Returns a new array
console.log(arr1.map(x => x * 2));

// Returns elements satisfying condition
console.log(arr1.filter(x => x > 9));

// Returns a single accumulated value
console.log(arr1.reduce((total, x) => total + x, 0));

// Executes function for each element
arr1.forEach(x => console.log(x));

// Checks if at least one element satisfies condition
console.log(arr1.some(x => x > 6));

// Checks if all elements satisfy condition
console.log(arr1.every(x => x > 6));

// Returns first matching element
console.log(arr1.find(x => x > 4));

// Returns index of first matching element
console.log(arr1.findIndex(x => x > 4));

// Sorting methods
let fruits = ["banana", "apple", "pear", "kiwi"];

console.log(fruits.sort());

// Numeric sorting
let values = [40, 10, 100, 5, 25];

console.log(values.sort((a, b) => a - b));
console.log(values.sort((a, b) => b - a));

// Array manipulation
let data = [1, 4, 9, 16];

// Replaces elements from index 1 to 2
