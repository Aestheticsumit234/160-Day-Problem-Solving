const { jsx } = require("react/jsx-runtime");

// 1. Single State Management
let currentInput = "0";
let historyInput = "";

// 2. The Unified Display Function
function updateUI() {
  const resultElement = document.getElementById("result");
  const historyElement = document.getElementById("history");

  if (resultElement) resultElement.innerText = currentInput;
  if (historyElement) historyElement.innerText = historyInput;

  // Auto-shrink font if number is long (iPhone Style)
  if (currentInput.length > 8) {
    resultElement.style.fontSize = "2.5rem";
  } else {
    resultElement.style.fontSize = "3.5rem";
  }
}

// 3. Logic Functions
function append(value) {
  if (currentInput.length > 12) return; // Prevent overflow

  if (currentInput === "0" && value !== ".") {
    currentInput = value;
  } else {
    currentInput += value;
  }
  updateUI();
}

function clearAll() {
  currentInput = "0";
  historyInput = "";
  updateUI();
}

function backspace() {
  currentInput = currentInput.length > 1 ? currentInput.slice(0, -1) : "0";
  updateUI();
}

function calculate() {
  try {
    if (currentInput === "0") return;

    historyInput = currentInput;
    // Replace visual symbols with math symbols for eval
    let mathExpression = currentInput.replace(/×/g, "*").replace(/÷/g, "/");

    let result = eval(mathExpression);

    // Format result to avoid long decimals (e.g., 0.1 + 0.2)
    currentInput = Number(result.toFixed(8)).toString();
    updateUI();
  } catch (error) {
    currentInput = "Error";
    updateUI();
    setTimeout(clearAll, 1500);
  }
}

function toggleSign() {
  currentInput = (parseFloat(currentInput) * -1).toString();
  updateUI();
}

// 4. Theme Toggle
function toggleTheme() {
  document.body.classList.toggle("dark-mode");
  document.getElementById("sun").classList.toggle("active");
  document.getElementById("moon").classList.toggle("active");
}

// 5. Fixed Keyboard Support
document.addEventListener("keydown", (e) => {
  // Numbers & Dot
  if ((e.key >= "0" && e.key <= "9") || e.key === ".") {
    append(e.key);
  }
  // Operators
  else if (e.key === "+") append("+");
  else if (e.key === "-") append("-");
  else if (e.key === "*") append("×");
  else if (e.key === "/") e.preventDefault() || append("÷");
  // Commands
  else if (e.key === "Enter" || e.key === "=") {
    e.preventDefault();
    calculate();
  } else if (e.key === "Backspace") {
    backspace();
  } else if (e.key === "Escape") {
    clearAll();
  }
});

// Initialize display on load
updateUI();
