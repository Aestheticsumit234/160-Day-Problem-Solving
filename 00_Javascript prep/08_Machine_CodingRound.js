const expenses = [
  { discription: "Grocery", amount: 100, category: "Grocery" },
  { discription: "Driving Car", amount: 130, category: "Transport" },
  { discription: "Room Rent", amount: 120, category: "Utilities" },
  { discription: "internet bill", amount: 110, category: "Entertainment" },
  { discription: "Home Rent", amount: 140, category: "Utilities" },
  { discription: "Bus", amount: 160, category: "Transport" },
  { discription: "Grocery", amount: 170, category: "Grocery" },
  { discription: "watching movies", amount: 180, category: "Entertainment" },
  { discription: "Grocery", amount: 70, category: "Grocery" },
];

const categoryTotals = expenses.reduce((report, expense) => {
  if (!report[expense.category]) {
    report[expense.category] = 0;
  }
  report[expense.category] += expense.amount;
  return report;
}, {});

// console.log(categoryTotals);

let expenseReport = expenses.reduce((report, expense) => {
  report[expense.category] = (report[expense.category] || 0) + expense.amount;
  return report;
}, {});

// console.log(expenseReport);

const Tasks = [
  { discription: "write report", completed: false, priority: 2 },
  { discription: "prepare presentation", completed: true, priority: 4 },
  { discription: "send email", completed: true, priority: 5 },
  { discription: "Go live on youtube", completed: false, priority: 3 },
  { discription: "Go live on instagram", completed: false, priority: 6 },
  { discription: "Go live on twitter", completed: false, priority: 7 },
  { discription: "Go live on facebook", completed: false, priority: 1 },
];

const pendingTasks = Tasks.filter((task) => !task.completed).sort(
  (a, b) => a.priority - b.priority
);
// console.log(pendingTasks);

let movieReatingList = [
  { title: "movie A", reatings: [4, 5, 2] },
  { title: "movie B", reatings: [5, 5, 5] },
  { title: "movie C", reatings: [5, 4, 3] },
  { title: "movie D", reatings: [4, 3, 2] },
];

const averageReating = movieReatingList.map((movie) => {
  let total = movie.reatings.reduce((sum, rating) => (sum += rating), 0);
  let average = total / movie.reatings.length;
  return {
    title: movie.title,
    averageRating: average.toFixed(2),
  };
});
console.log(averageReating);
