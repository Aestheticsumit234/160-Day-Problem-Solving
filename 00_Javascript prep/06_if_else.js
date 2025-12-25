// ek online store agr customer ka bill 1000 se jayada hai to 10% ka discount milta hai nhi to full amout pay krna padta hai

let bill = "1050";
let discount = 10;

function calculateTotalBill(amount) {
  const Amount = Number(amount);
  if (Amount >= 1000) {
    console.log(
      `Aapko 10% ka discount mila Aapko pya krna hai = ${Amount * 0.3}`
    );
  } else {
    console.log(`please pay on this QR code .... and amout is = ${Amount}`);
  }
}

calculateTotalBill(bill);

function isTruthy(value) {
  return !!value;
}

console.log(isTruthy(0));

console.log(isTruthy("0"));

console.log(isTruthy(" "));
console.log(isTruthy("false"));
console.log(isTruthy({}));
console.log(isTruthy([]));
console.log(isTruthy(["sumit"]));
console.log(isTruthy(1));

function login(username, password) {
  if (username == "admin@gmail.com" && password == 123) {
    console.log("user Logged in Sucessfully");
  } else {
    console.log("invalid credentials ");
  }
}
login("a2min@gmail.com", 123);
login("admin@gmail.com", 123);
