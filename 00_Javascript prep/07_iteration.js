let productDetails = [
  { product: "leptop", price: 323456 },
  { product: "smartphone", price: 67456 },
  { product: "Headphone", price: 2376 },
  { product: "Keyboard", price: 28956 },
];

const totalPrcie = productDetails.reduce((acc, cur) => {
  return acc + cur.price;
}, 0);
// console.log(totalPrcie);

let inventories = [
  { name: "wedge A", stock: 170 },
  { name: "wedge B", stock: 45 },
  { name: "wedge C", stock: 600 },
  { name: "wedge D", stock: 25 },
];

const LowInvebtry = inventories.filter((inventry) => inventry.stock < 50);
// console.log(LowInvebtry);

let usersActivities = [
  { name: "Alice A", activeCount: 17 },
  { name: "bob B", activeCount: 45 },
  { name: "john C", activeCount: 58 },
  { name: "chatlia D", activeCount: 300 },
];

// find most activie user
const maxActiveUser = usersActivities.reduce((actUser, user) =>
  user.activeCount > actUser.activeCount ? user : actUser
);

console.log(maxActiveUser);
