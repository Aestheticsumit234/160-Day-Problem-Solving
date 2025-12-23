// // 📌 Scenario
// // You get user names from backend, but data is messy.
// // input

// const users = ["  sumit  ", "RAHUL", "", "  ankit sharma ", null, "Neha"];

// // output ["Sumit", "Rahul", "Ankit Sharma", "Neha"]

// // Task
// // Remove invalid values (null, empty strings)
// // Trim spaces
// // Convert names to Title Case
// // Return a clean array

// const cleanNames = (users) => {
//   const User = users
//     .filter((user) => user !== null && user !== "") // remove all null and empty string
//     .map((user) => user.trim()) // remove whitespace
//     .map((user) => user[0].toUpperCase() + user.slice(1).toLowerCase()) // convert to title case
//     .join(", ");
//   return Array(User); // return an array
// };

// // console.log(cleanNames(users));

// const users2 = ["Ram", "RAHUL", "Anil sharma", "Sumit"];

// // adding Array
// // let allUsers = users.concat(users2);
// const allUsers = [...users, ...users2];
// const allUsers2 = [...users, "Aman", "Rahul"];
// // console.log(allUsers2);

// // 1. Find Maximum and Minimum Marks
// // Scenario:A teacher stores marks of students in an array and wants to find the highest and lowest marks.
// // Input: arr = [45, 78, 62, 90, 33]
// // Expected Output: Maximum = 90, Minimum = 33

// const studentsMarks = [45, 78, 62, 190, 3];
// let lowestMarks = studentsMarks[0];
// let greatedMarks = studentsMarks[0];
// studentsMarks.map((mark) => {
//   if (mark < greatedMarks) {
//     greatedMarks = mark;
//   }
//   if (mark > lowestMarks) {
//     lowestMarks = mark;
//   }
// });

// // console.log(lowestMarks, greatedMarks);

// // 2. Calculate Average Sales
// // Scenario: An e‑commerce company stores daily sales in an array and wants the average sale.
// // Input:arr = [200, 450, 300, 500, 550]
// // Expected Output:Average Sales = 400

// const Allsales = [200, 450, 300, 500, 550];
// let sum = 0;
// let Average;
// for (const item of Allsales) {
//   sum += item;
//   Average = sum / Allsales.length;
// }
// // console.log(Average);

// // 3. Remove Duplicate Elements
// // Scenario: A system stores user IDs but duplicates are created due to an error.
// // Input: arr = [1, 2, 2, 3, 4, 4, 5]
// // Expected Output:[1, 2, 3, 4, 5]

// const userIds = [1, 2, 3, 2, 3, 4, 4, 5];
// const unique = userIds.filter((user, index) => userIds.indexOf(user) === index);
// // console.log(unique);

// // 4. Find the Second Largest Element
// // Scenario:A game stores player scores and wants the second highest score.
// // Input:arr = [10, 50, 40, 30, 20]
// // Expected Output:Second Largest = 40

// const GameScore = [10, 20, 30, 140, 3, 89, 70];
// let firstScore = GameScore[0];
// let secondScore = GameScore[0];
// let thirdScore = GameScore[0];
// let lowestScore = GameScore[0];

// GameScore.map((score) => {
//   if (score > firstScore) {
//     thirdScore = secondScore;
//     secondScore = firstScore;
//     firstScore = score;
//   }
//   if (score > secondScore && score < firstScore) {
//     thirdScore = secondScore;
//     secondScore = score;
//   }
//   if (score > thirdScore && score < secondScore) {
//     thirdScore = score;
//   }
//   if (lowestScore > score) {
//     lowestScore = score;
//   }
// });

// // console.log(
// //   `firstScore->  ${firstScore} \n secondScore -> ${secondScore} \n thirdScore -> ${thirdScore} \n lowestScore -> ${lowestScore}`
// // );

// let chaiType = ["massalachai", "gingeerchai", "chocolatechai"];
// // first value
// // console.log(chaiType[0]);
// // console.log(chaiType[2]);
// // console.log(chaiType[1]);

// // get all chai
// const totalChai = chaiType.length;
// // console.log(`total Chai ---> ${totalChai}`);

// // add chaiType
// chaiType.push("milkchai"); // adding the item at the end
// // console.log(chaiType);

// // remove chaiType
// chaiType.pop(); // removing the item at the end and return that removed item
// // console.log(chaiType);

// // ----------------------------------------------------------- IndexOf and Splice --------------------------------------------------

// // finding index
// const indexchai = chaiType.indexOf("gingeerchai");
// if (indexchai !== -1) {
//   // console.log(`index of chai -> ${indexchai}`);
//   chaiType.splice(indexchai, 1, "xchocolatechai", "ygingeerchai"); // splice is use to replace the element and adding the element and remove the element
// }

// // console.log(chaiType);
// // splice it is use to remove the element from the aray and it is also use to add the element in the array and replace the element

// // inset the element on 3rd index
// let nums = [10, 20, 30, 40, 50, 89];
// nums.splice(3, 1, 100);
// // console.log(nums);```

// let index = nums.indexOf(30);
// if (index !== -1) {
//   nums.splice(index, 1, 300);
// }
// // console.log(nums);

// // make a functiont that remove any item in the array

// // forEach method syntex
// // array.forEach(function(item, index, array) {
// //   // code
// // });

// function removeValue(Arr, value) {
//   const index = Arr.indexOf(value);
//   if (index !== -1) {
//     Arr.splice(index, 1);
//   }
//   return Arr;
// }
// // console.log(removeValue(nums, 50));

// // Cart item ke position 2 wale item ko “Apple” se replace karo
// let cart = ["Banana", "Mango", "Orange", "Grapes"];
// cart.splice(2, 1, "Apple");
// // console.log(cart);

// // chaiType.forEach((chai, index, array) =>
// //   console.log(
// //     `the chai name is ${chai} and index is ${index} and the chai from ${typeof array} ChaiType`
// //   )
// // );

// const numbers = [1, 2, 3, 4];
// numbers.forEach((number) => console.log(number * 2));

// let students = ["Sumit", "Raj", "Neha"];
// students.forEach((student) => console.log(student));

// // Q3: forEach ka use karke total marks find karo
// let marks = [50, 60, 70];
// let total = 0;
// marks.forEach((mark) => (total += mark));
// console.log(total);

// // Q4: forEach se cart ke saare items ko “in stock” print karo
// let FruitsCart = ["Apple", "Mango", "Banana"];
// FruitsCart.forEach((item) => console.log(`itmem is in stock ${item}`));

// // Q5: Object array me se sabki age +1 kar do
// let objectUsers = [
//   { name: "Aman", age: 20 },
//   { name: "Riya", age: 22 },
// ];

// objectUsers.forEach((user) => (user.age += 1));

// console.log(objectUsers);

// // Q1 — (Real-world: E-commerce Cart Total Update)

// // ❗ “Ye scenario almost har frontend project me hota hi hota hai.”
// // Cart me jitne items hain, unka total quantity calculate karo using forEach():
// let shoppingCart = [
//   { item: "Mobile", qty: 2 },
//   { item: "Laptop", qty: 1 },
//   { item: "Mouse", qty: 3 },
// ];

// let totalQuentity = 0;
// shoppingCart.forEach((items) => (totalQuentity += items.qty));

// console.log(totalQuentity);

// // Q2 — (Real-world: Product Price Formatting)
// // ❗ “UI me price display karne se pehle formatting ki jati hai.”
// // Har product ke price ke aage "₹" add karna hai.
// let products = [
//   { name: "Pen", price: 10 },
//   { name: "Notebook", price: 40 },
// ];
// products.forEach((item) => console.log(`₹${item.price}`));

// // Q3 — (Real-world: User Emails for Notification System)
// // ❗ “Employee dashboards / admin panels me ye regularly hota hai.”
// // Saare users ke email print karo (e.g., sending mail list banane ke liye):

// let UserArray = [
//   { name: "Aman", email: "aman@gmail.com" },
//   { name: "Sumit", email: "sumit@gmail.com" },
// ];

// UserArray.forEach((user) => console.log(user.email));

// // Q4 — (Real-world: Todo App Bulk Update)
// // ❗ “React / Node projects me bulk update ek common task hai.”
// // Saare tasks ko completed: true kar do.

// let todos = [
//   { task: "HTML", completed: false },
//   { task: "CSS", completed: false },
//   { task: "JS", completed: false },
// ];

// todos.forEach((todo) => console.log((todo.completed = true)));

// // Q5 — (Real-world: Backend User Normalization)
// // ❗ “Database se data accha form me laana hota hai — interviews me pucha hi pucha jata hai.”
// // Har user object me fullName = firstName + lastName add karo:

// let DatabaseUser = [
//   { firstName: "Sumit", lastName: "Sharma" },
//   { firstName: "Aman", lastName: "Singh" },
// ];

// DatabaseUser.forEach((user) =>
//   console.log(user.firstName + " " + user.lastName)
// );

// // Q6 — (Real-world: Discount Banner Check)
// // ❗ “E-commerce me check hota hai ki koi item discounted hai ya nahi.”
// // Check karo ki kisi product ka discount true hai ya nahi (print karo):
// let items = [
//   { title: "Shoes", discount: false },
//   { title: "Watch", discount: true },
//   { title: "Cap", discount: false },
// ];

// items.forEach((item) => {
//   if (item.discount === true) {
//     console.log(item);
//   }
// });

// // Q7 — (Real-world: Add Index for UI Rendering)
// // ❗ “React me list render karte waqt index helpful hota hai.”
// // Har student object me ek index property add karo.
// let studentsName = [{ name: "Sumit" }, { name: "Rohan" }, { name: "Ankit" }];

// studentsName.forEach((student, index) => {
//   student.index = index;
//   console.log(student);
// });

// // Q8 — (Real-world: Format Names for Display UI)
// // ❗ “User-generated data normalize karne me ye common hota hai.”
// // Saare names ko uppercase me convert karo:

// let names = ["sumit", "aman", "riya"];
// names.forEach((name) => console.log(name.toUpperCase()));

// // Q9 — (Real-world: Exam Result Processing)
// // ❗ “School/college app & admin dashboards me ye scenario hota hai.”
// // Passing marks = 35
// // Count how many passed:

// let PassingMarks = 35;
// let studentMarks = [20, 50, 35, 80, 12, 38];
// let passedStuden = 0;
// studentMarks.forEach((mark) =>
//   mark >= PassingMarks
//     ? (passedStuden += 1)
//     : console.log(`this studetn is marks is${mark} he is faild??`)
// );
// console.log(passedStuden);

// // Q10 — (Real-world: Route Debugging in Web App)
// // ❗ “React Router / Next.js route logs debugging me frequently use hota hai.”
// // Saare routes ko log karo:

// let routes = ["/home", "/dashboard", "/profile", "/settings"];

// routes.forEach((route) => console.log(route));

// // ----------------------------------
// // concatinations
// let chaiTypes = [
//   "blackchai",
//   "gingeerchai",
//   "whitechai",
//   "milkchai",
//   "greenchai",
//   "orangechai",
//   "olongchai",
// ];

// let anotherChaiType = ["blackchai", "gingeerchai", "whitechai", "milkchai"];
// // const allTypeTeas = chaiTypes.concat(anotherChaiType);
// const allTypeTeas = [...chaiTypes, anotherChaiType];
// console.log(allTypeTeas);

// // map() — TOP 10 REAL-WORLD + INTERVIEW SCENARIO QUESTIONS

// // ⭐ Q1 — Transform Product Prices (E-commerce)
// // ❗ “Frontend me UI display ke liye ye daily use hota hai.”
// // Products array ka new array banao jisme price 10% discount ke baad ho.

// let products1 = [
//   { name: "Mobile", price: 10000 },
//   { name: "Laptop", price: 50000 },
//   { name: "Mouse", price: 1000 },
// ];

// // Output example:
// // [{name:"Mobile", price:9000}, ...]

// products1.map((product) => {
//   product.price = product.price - product.price * (10 / 100);
// });

// console.log(products1);

// // ⭐ Q2 — Extract Only Names (Database → UI)
// // ❗ “API data me se sirf required fields nikalne ka kaam map se hota hai.”
// // Users array se sirf names ka new array banao.

// let users1 = [
//   { name: "Sumit", age: 20 },
//   { name: "Aman", age: 25 },
//   { name: "Riya", age: 21 },
// ];

// const newUsers = users1.map((user) => user.name);
// console.log(newUsers);

// ⭐ Q3 — Convert Marks to Grades
// ❗ “Edu-tech apps me scoring transformation map se hota hai.”
// Marks ko grade me convert karo:
// = 90 → A
// = 75 → B
// = 35 → C
// < 35 → F

let marks2 = [95, 82, 64, 49, 40, 20];
marks2.map((mark) => {
  if (mark >= 90) {
    console.log("A");
  }
  if (mark >= 75 && mark < 90) {
    console.log("B");
  }
  if (mark >= 35 && mark < 75) {
    console.log("C");
  }
  if (mark < 35) {
    console.log("F");
  }
});

// ⭐ Q4 — Add New Property to Each Object (Backend cleanup)
// ❗ “DB data normalize karne me bahut common task.”
// Har employee object me isActive: true add karo (without mutating original).

let employees = [{ name: "Aman" }, { name: "Riya" }, { name: "Sumit" }];

const Arr = employees.map((itme) => {});

// console.log(Arr);

// ⭐ Q5 — Convert Array of Numbers to Array of Objects
// ❗ “Charts / analytics me data mapping ka use hota hai.”
// Array: [1, 2, 3]
const Arr1 = [{ value: 1 }, { value: 2 }, { value: 3 }];

const newArr = Arr1.map((arr) => arr.value);
console.log(newArr);

// ⭐ Q6 — Append Index to Each String (UI list rendering)
// ❗ “React me list render karne me index use hota hai.”
// Students array ka new array banao jisme naam ke saath index ho.
let students = ["Sumit", "Aman", "Riya"];

const newStudent = students.map((itme, index) => index + "-" + itme);
console.log(newStudent);

// ⭐ Q7 — Convert USD to INR (Finance apps ka common use)
// Rate = 1 USD = 83 INR
// Prices array ko INR me convert kar ke new array return karo.

let pricesUSD = [10, 20, 50];
const newPriceInUSD = pricesUSD.map((price) => price * 85);
console.log(newPriceInUSD);

// ⭐ Q8 — Extract All IDs From API Response
// ❗ “Backend se complex objects aate hain, mapping se flatten karte hain.”

let response = [
  { id: 101, name: "Mobile" },
  { id: 102, name: "Laptop" },
  { id: 103, name: "Mouse" },
];
const NewResponse = response.map((items) => items.id);
console.log(NewResponse);

// ⭐ Q9 — Create Slug for Blog URLs
// ❗ “Blog / SEO projects me slug always generate hota hai.”

let titles = ["Hello World", "JavaScript Basics", "My First Blog"];
