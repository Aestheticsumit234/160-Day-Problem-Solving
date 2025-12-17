// Scenario
// You are building a shopping cart.
// Product price: "499.99" (string)
// Quantity: 3
// GST: 18%
// Discount: 10%

//Tasks
// Convert price to number
// Calculate total price
// Apply discount
// Add GST
// Round final amount to 2 decimal places

const price = "499.99";
const quantity = 3;
const gstPercent = 18;
const discountPercent = 10;

const convertToNumber = (value) => Number(value);

const calculateTotal = (price, quantity) => price * quantity;

const applyDiscount = (total, discount) => total - (total * discount) / 100;

const addGST = (amount, gst) => amount + (amount * gst) / 100;

const roundToTwo = (amount) => Math.round(amount * 100) / 100;

const numericPrice = convertToNumber(price);
const total = calculateTotal(numericPrice, quantity);
const discounted = applyDiscount(total, discountPercent);
const finalAmount = roundToTwo(addGST(discounted, gstPercent));

console.log("Final Amount:", finalAmount);
