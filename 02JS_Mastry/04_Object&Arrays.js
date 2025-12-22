// closure padhane hai

// Object
const users = {
  Namme: "amit",
  lastName: "Hehehe",
  Age: 56,
  isMarried: false,
  hasGirlfriend: false,
  address: function () {
    console.log(`Hello, I am ${this.Name}`);
  },
};

// Access
// Dot notation
// bracket notation
console.log(users.address());
console.log(users["user-name"]);

// let key = "name";
// console.log(users[key]); // galt hai

// update
users.isMarried = true;
users.hasGirlfriend = null;

// delete
delete users.Age;
console.log(users);

// Add
users.Class = 8;
console.log(users);

users.address();

// object Destructuring
// key renaming
let { Namme: Name, Age, isMarried, hasGirlfriend } = users;
console.log(Name);

// spread Operator
let user2 = { ...users, hasCow: false, hasOx: true };
console.log(user2);

// method
console.log(Object.keys(user2)); //aray
console.log(Object.values(user2)); // aray
console.log(Object.entries(user2));
for (const key in object) {
  if (!Object.hasOwn(object, key)) continue;

  const element = object[key];
}

// shallow copy and deep copy
const shallowCopy = {
  Namme: "Aman",
  lastName: "sah",
  isMarried: false,
  hasGirlfriend: false,
  address: "nahi hai",
  Class: "78th",
  hasCow: "5",
  hasOx: false,
  newAddress: {
    city: "jalandhar",
    state: "punjab",
    pin: {
      pin1: "144001",
      pin2: "144002",
    },
  },
};

// const newShallow = shallowCopy;

console.log("this shallow is------>", newShallow);
console.log("this old is------>", shallowCopy);

let newShallow = { ...shallowCopy }; //nested me kam nhi krta hai
// console.log(newShallow);
shallowCopy.Class = 23456789;

console.log("new object ------------------>", newShallow);

// Deep copy
let object1 = JSON.parse(JSON.stringify(shallowCopy));
console.log("objectnew--------->", object1);

shallowCopy.newAddress.pin.pin2 = "hello";
console.log("old---> ", shallowCopy);
