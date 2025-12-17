// #Scenario
// You are building a signup form.User enters a full name and email.
// Task:
// 1.Remove extra spaces from the name
// 2.Convert the name to Title Case
// 3.Check if email contains @ and .
// 4.Extract username from email
let userInput = "   Sumit Sharma   ";
let userEmail = "   SumitSharma@example.com   ";

const trimInput = (str) => str.trim();

const toTitleCase = (name) => {
  return name
    .trim()
    .toLowerCase()
    .split(" ")
    .filter((word) => word.length > 0)
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
};

const isValidEmail = (email) => {
  const trimmedEmail = email.trim();
  return trimmedEmail.includes("@") && trimmedEmail.includes(".");
};

const extractUsername = (email) => {
  return email.trim().split("@")[0];
};

console.log("Formatted Name:", toTitleCase(userInput));
console.log("Is Email Valid:", isValidEmail(userEmail));
console.log("Username:", extractUsername(userEmail));
