// 📌 Scenario
// You get user names from backend, but data is messy.
// input

const users = ["  sumit  ", "RAHUL", "", "  ankit sharma ", null, "Neha"];

// output ["Sumit", "Rahul", "Ankit Sharma", "Neha"]

// Task
// Remove invalid values (null, empty strings)
// Trim spaces
// Convert names to Title Case
// Return a clean array

const cleanNames = (users) => {
  const User = users
    .filter((user) => user !== null && user !== "") // remove all null and empty string
    .map((user) => user.trim()) // remove whitespace
    .map((user) => user[0].toUpperCase() + user.slice(1).toLowerCase()) // convert to title case
    .join(", ");
  return Array(User); // return an array
};

// console.log(cleanNames(users));

const users2 = ["Ram", "RAHUL", "Anil sharma", "Sumit"];

// adding Array
// let allUsers = users.concat(users2);
const allUsers = [...users, ...users2];
const allUsers2 = [...users, "Aman", "Rahul"];
// console.log(allUsers2);

// 1. Find Maximum and Minimum Marks
// Scenario:A teacher stores marks of students in an array and wants to find the highest and lowest marks.
// Input: arr = [45, 78, 62, 90, 33]
// Expected Output: Maximum = 90, Minimum = 33

const studentsMarks = [45, 78, 62, 190, 3];
let lowestMarks = studentsMarks[0];
let greatedMarks = studentsMarks[0];
studentsMarks.map((mark) => {
  if (mark < greatedMarks) {
    greatedMarks = mark;
  }
  if (mark > lowestMarks) {
    lowestMarks = mark;
  }
});

// console.log(lowestMarks, greatedMarks);

// 2. Calculate Average Sales
// Scenario: An e‑commerce company stores daily sales in an array and wants the average sale.
// Input:arr = [200, 450, 300, 500, 550]
// Expected Output:Average Sales = 400

const Allsales = [200, 450, 300, 500, 550];
let sum = 0;
let Average;
for (const item of Allsales) {
  sum += item;
  Average = sum / Allsales.length;
}
// console.log(Average);

// 3. Remove Duplicate Elements
// Scenario: A system stores user IDs but duplicates are created due to an error.
// Input: arr = [1, 2, 2, 3, 4, 4, 5]
// Expected Output:[1, 2, 3, 4, 5]

const userIds = [1, 2, 3, 2, 3, 4, 4, 5];
const unique = userIds.filter((user, index) => userIds.indexOf(user) === index);
// console.log(unique);

// 4. Find the Second Largest Element
// Scenario:A game stores player scores and wants the second highest score.
// Input:arr = [10, 50, 40, 30, 20]
// Expected Output:Second Largest = 40

const GameScore = [10, 20, 30, 140, 3, 89, 70];
let firstScore = GameScore[0];
let secondScore = GameScore[0];
let thirdScore = GameScore[0];
let lowestScore = GameScore[0];

GameScore.map((score) => {
  if (score > firstScore) {
    thirdScore = secondScore;
    secondScore = firstScore;
    firstScore = score;
  }
  if (score > secondScore && score < firstScore) {
    thirdScore = secondScore;
    secondScore = score;
  }
  if (score > thirdScore && score < secondScore) {
    thirdScore = score;
  }
  if (lowestScore > score) {
    lowestScore = score;
  }
});

// console.log(
//   `firstScore->  ${firstScore} \n secondScore -> ${secondScore} \n thirdScore -> ${thirdScore} \n lowestScore -> ${lowestScore}`
// );

let chaiType = ["massalachai", "gingeerchai", "chocolatechai"];
// first value
// console.log(chaiType[0]);
// console.log(chaiType[2]);
// console.log(chaiType[1]);

// get all chai
const totalChai = chaiType.length;
// console.log(`total Chai ---> ${totalChai}`);

// add chaiType
chaiType.push("milkchai"); // adding the item at the end
// console.log(chaiType);

// remove chaiType
chaiType.pop(); // removing the item at the end and return that removed item
// console.log(chaiType);

// ----------------------------------------------------------- IndexOf and Splice --------------------------------------------------

// finding index
const indexchai = chaiType.indexOf("gingeerchai");
if (indexchai !== -1) {
  // console.log(`index of chai -> ${indexchai}`);
  chaiType.splice(indexchai, 1, "xchocolatechai", "ygingeerchai"); // splice is use to replace the element and adding the element and remove the element
}

// console.log(chaiType);
// splice it is use to remove the element from the aray and it is also use to add the element in the array and replace the element

// inset the element on 3rd index
let nums = [10, 20, 30, 40, 50, 89];
nums.splice(3, 1, 100);
// console.log(nums);```

let index = nums.indexOf(30);
if (index !== -1) {
  nums.splice(index, 1, 300);
}
// console.log(nums);

// make a functiont that remove any item in the array

// forEach method syntex
// array.forEach(function(item, index, array) {
//   // code
// });

function removeValue(Arr, value) {
  const index = Arr.indexOf(value);
  if (index !== -1) {
    Arr.splice(index, 1);
  }
  return Arr;
}
// console.log(removeValue(nums, 50));

// Cart item ke position 2 wale item ko “Apple” se replace karo
let cart = ["Banana", "Mango", "Orange", "Grapes"];
cart.splice(2, 1, "Apple");
// console.log(cart);

// chaiType.forEach((chai, index, array) =>
//   console.log(
//     `the chai name is ${chai} and index is ${index} and the chai from ${typeof array} ChaiType`
//   )
// );

const numbers = [1, 2, 3, 4];
numbers.forEach((number) => console.log(number * 2));

let students = ["Sumit", "Raj", "Neha"];
students.forEach((student) => console.log(student));

// Q3: forEach ka use karke total marks find karo
let marks = [50, 60, 70];
let total = 0;
marks.forEach((mark) => (total += mark));
console.log(total);

// Q4: forEach se cart ke saare items ko “in stock” print karo
let FruitsCart = ["Apple", "Mango", "Banana"];
FruitsCart.forEach((item) => console.log(`itmem is in stock ${item}`));

// Q5: Object array me se sabki age +1 kar do
let objectUsers = [
  { name: "Aman", age: 20 },
  { name: "Riya", age: 22 },
];

objectUsers.forEach((user) => (user.age += 1));

console.log(objectUsers);

// Q1 — (Real-world: E-commerce Cart Total Update)

// ❗ “Ye scenario almost har frontend project me hota hi hota hai.”
// Cart me jitne items hain, unka total quantity calculate karo using forEach():
let shoppingCart = [
  { item: "Mobile", qty: 2 },
  { item: "Laptop", qty: 1 },
  { item: "Mouse", qty: 3 },
];

let totalQuentity = 0;
shoppingCart.forEach((items) => (totalQuentity += items.qty));

console.log(totalQuentity);

// Q2 — (Real-world: Product Price Formatting)
// ❗ “UI me price display karne se pehle formatting ki jati hai.”
// Har product ke price ke aage "₹" add karna hai.
let products = [
  { name: "Pen", price: 10 },
  { name: "Notebook", price: 40 },
];
products.forEach((item) => console.log(`₹${item.price}`));

// Q3 — (Real-world: User Emails for Notification System)
// ❗ “Employee dashboards / admin panels me ye regularly hota hai.”
// Saare users ke email print karo (e.g., sending mail list banane ke liye):

let UserArray = [
  { name: "Aman", email: "aman@gmail.com" },
  { name: "Sumit", email: "sumit@gmail.com" },
];

UserArray.forEach((user) => console.log(user.email));

// Q4 — (Real-world: Todo App Bulk Update)
// ❗ “React / Node projects me bulk update ek common task hai.”
// Saare tasks ko completed: true kar do.

let todos = [
  { task: "HTML", completed: false },
  { task: "CSS", completed: false },
  { task: "JS", completed: false },
];

todos.forEach((todo) => console.log((todo.completed = true)));

// Q5 — (Real-world: Backend User Normalization)
// ❗ “Database se data accha form me laana hota hai — interviews me pucha hi pucha jata hai.”
// Har user object me fullName = firstName + lastName add karo:

let DatabaseUser = [
  { firstName: "Sumit", lastName: "Sharma" },
  { firstName: "Aman", lastName: "Singh" },
];

DatabaseUser.forEach((user) =>
  console.log(user.firstName + " " + user.lastName)
);

// Q6 — (Real-world: Discount Banner Check)
// ❗ “E-commerce me check hota hai ki koi item discounted hai ya nahi.”
// Check karo ki kisi product ka discount true hai ya nahi (print karo):
let items = [
  { title: "Shoes", discount: false },
  { title: "Watch", discount: true },
  { title: "Cap", discount: false },
];

items.forEach((item) => {
  if (item.discount === true) {
    console.log(item);
  }
});

// Q7 — (Real-world: Add Index for UI Rendering)
// ❗ “React me list render karte waqt index helpful hota hai.”
// Har student object me ek index property add karo.
let studentsName = [{ name: "Sumit" }, { name: "Rohan" }, { name: "Ankit" }];

studentsName.forEach((student, index) => {
  student.index = index;
  console.log(student);
});

// Q8 — (Real-world: Format Names for Display UI)
// ❗ “User-generated data normalize karne me ye common hota hai.”
// Saare names ko uppercase me convert karo:

let names = ["sumit", "aman", "riya"];
names.forEach((name) => console.log(name.toUpperCase()));

// Q9 — (Real-world: Exam Result Processing)
// ❗ “School/college app & admin dashboards me ye scenario hota hai.”
// Passing marks = 35
// Count how many passed:

let PassingMarks = 35;
let studentMarks = [20, 50, 35, 80, 12, 38];
let passedStuden = 0;
studentMarks.forEach((mark) =>
  mark >= PassingMarks
    ? (passedStuden += 1)
    : console.log(`this studetn is marks is${mark} he is faild??`)
);
console.log(passedStuden);

// Q10 — (Real-world: Route Debugging in Web App)
// ❗ “React Router / Next.js route logs debugging me frequently use hota hai.”
// Saare routes ko log karo:

let routes = ["/home", "/dashboard", "/profile", "/settings"];

routes.forEach((route) => console.log(route));

// ----------------------------------
// concatinations
let chaiTypes = [
  "blackchai",
  "gingeerchai",
  "whitechai",
  "milkchai",
  "greenchai",
  "orangechai",
  "olongchai",
];

let anotherChaiType = ["blackchai", "gingeerchai", "whitechai", "milkchai"];
// const allTypeTeas = chaiTypes.concat(anotherChaiType);
const allTypeTeas = [...chaiTypes, anotherChaiType];
console.log(allTypeTeas);

// Reduce

// Q1 — Cart Total Price (MOST COMMON)
let AmanzonCart = [
  { item: "Mobile", price: 10000, qty: 2 }, //0
  { item: "Mouse", price: 500, qty: 3 },
  { item: "Keyboard", price: 1500, qty: 1 },
];

const totalQyt = AmanzonCart.reduce((acc, cur) => acc + cur.qty);
console.log(totalQyt);

// Q2 — Sum of Numbers (Warm-up but compulsory)
let studentAmrks = [10, 20, 30, 40, 50];
const totalMarks = studentAmrks.reduce((acc, cur) => acc + cur, 0);

console.log(totalMarks);

// Q3 — Count Passed Students (Real Exam System)
let StudentScore = [20, 50, 35, 80, 12, 38];
let passingScore = 35;

const passedStudents = StudentScore.reduce(
  (acc, cur) => (cur >= passingScore ? acc + 1 : acc),
  0
);
console.log(passedStudents);

// Q4 — Find Highest Salary (HR / Payroll App)
let employees = [
  { name: "Aman", salary: 30000 },
  { name: "Riya", salary: 50000 },
  { name: "Sumit", salary: 45000 },
];

const hightSalary = employees.reduce((max, emp) => {
  return emp.salary > max.salary ? emp : max;
});
console.log(hightSalary);

// Q5 — Group Users by Role (Backend / Admin Panel)

let groupUser = [
  { name: "Aman", role: "admin" },
  { name: "Sumit", role: "user" },
  { name: "Riya", role: "admin" },
  { name: "Neha", role: "user" },
  { names: "Aman", role: "Director" },
  { names: "Aman", role: "Director" },
  { names: "Aman", role: "Director" },
];

// output :-
// admin = [{ name: "Aman", role: "admin" },{ name: "Riya", role: "admin" },]
// user = [ { name: "Sumit", role: "user" },{ name: "Neha", role: "user" },]

const groupedUsers = groupUser.reduce((acc, user) => {
  if (!acc[user.role]) {
    acc[user.role] = [];
  }
  acc[user.role].push(user);
  return acc;
}, {});

console.log(groupedUsers);
