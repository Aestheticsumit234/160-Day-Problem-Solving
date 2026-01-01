const { log } = require("console");
const test = require("node:test");

// create an object representing a type of tea with properties for name type and caffein content
const teas = {
  name: "Green tea",
  type: "herbal",
  caffein: "low",
};

// Access and print the name and type properties of the tea object
// console.log(teas.name);
// console.log(teas.type);

// add a new property to the new tea object.
const newObj = {
  name: "lemon tea",
};
// change the caffein level of the tea object to medium
teas.caffein = "medium";
// console.log(teas);

// Remove the type property from the tea object
// check if the tea object has a property origin
// use the for....in loop to print all the properties of the tea object
// create a different nested object representing differente type of teas and their properties
// create a copy of the tea object
// Add a custome method discribe to the tea obejct that return a discription string
// merge to object representing different teas into a single object

// Q9 — (Real-world: Exam Result Processing)
// ❗ “School/college app & admin dashboards me ye scenario hota hai.”
// Passing marks = 35
// Count how many passed:

// Q4 — (Real-world: Todo App Bulk Update)
// ❗ “React / Node projects me bulk update ek common task hai.”
// Saare tasks ko completed: true kar do.
const tasks = [
  { todo: "youtub live", task: false },
  { todo: "youtub1 live", task: false },
  { todo: "youtub2 live", task: false },
];

// 1. Find Maximum and Minimum Marks
// Scenario:A teacher stores marks of students in an array and wants to find the highest and lowest marks.
// Input: arr = [45, 78, 62, 90, 33]
// Expected Output: Maximum = 90, Minimum = 33

let marks = [4, 3, 1198, 90, 330];
let maxMarks = marks[0];
let minMarks = marks[0];
for (let i = 0; i < marks.length; i++) {
  if (marks[i] > maxMarks) {
    maxMarks = marks[i];
  }
  if (minMarks > marks[i]) {
    minMarks = marks[i];
  }
}

console.log("maxMarks--->", maxMarks);
console.log("minMarks--->", minMarks);

// Q3 — (Real-world: User Emails for Notification System)
// ❗ “Employee dashboards / admin panels me ye regularly hota hai.”
// Saare users ke email print karo (e.g., sending mail list banane ke liye):

// API -> todo
// AI + Main +  leptop + time  ==> question solved nhi hai
