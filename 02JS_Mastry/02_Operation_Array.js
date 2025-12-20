// 1. Find Maximum and Minimum Marks

// Scenario: A teacher stores marks of students in an array and wants to find the highest and lowest marks.
// Input: arr = [45, 78, 62, 90, 33]
// Expected Output : Maximum = 90 Minimum = 33

const studentMarks = [4, 78, 62, 90, 103];
let maxMarks = studentMarks[0];
let minMarks = studentMarks[0];

function checkMarks(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxMarks) {
      maxMarks = arr[i];
    }
    if (arr[i] < minMarks) {
      minMarks = arr[i];
    }
  }
}

checkMarks(studentMarks);
console.log(`Maximum Marks = ${maxMarks}`);
console.log(`Minimum Marks = ${minMarks}`);

// 2. Calculate Average Sales
// Scenario:An e‑commerce company stores daily sales in an array and wants the average sale.
// Input : arr = [200, 450, 300, 500, 550]
// Expected Output: Average Sales = 400

const allSells = [200, 450, 300, 500, 550];

function checkAverageSales(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(`Average Sales = ${sum / arr.length}`);
}

checkAverageSales(allSells);

// 3. Remove Duplicate Elements
// Scenario: A system stores user IDs but duplicates are created due to an error.
// Input: arr = [1, 2, 2, 3, 4, 4, 5]
// Expected Output: [1, 2, 3, 4, 5]

const allNumbers = [1, 2, 2, 3, 4, 4, 5];
const unique = [];
for (let index = 0; index < allNumbers.length; index++) {
  if (!unique.includes(allNumbers[index])) {
    unique.push(allNumbers[index]);
  }
}

let unique4 = allNumbers.reduce((acc, cur) => {
  if (!acc.includes(cur)) {
    acc.push(cur);
  }
  return acc;
}, []);
console.log(`this is reduce ---> ${unique4}`);

// filter + indexof
let unique3 = allNumbers.filter(
  (item, index) => allNumbers.indexOf(item) === index
);
console.log(unique3);

// set
let unique2 = [...new Set(allNumbers)];
console.log(unique2);
