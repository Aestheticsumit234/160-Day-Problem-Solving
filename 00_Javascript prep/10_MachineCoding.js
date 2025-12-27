// How to find negative index in Array in javascript?
const arr = [10, 20, 30, 40, 50];

function getNegativeIndex(array) {
  return new Proxy(array, {
    get(target, prop) {
      const index = Number(prop);
      if (index < 0) {
        return target[target.length + index];
      }
      return target[prop];
    },
    set(target, prop, value) {
      const index = Number(prop);
      if (index < 0) {
        target[target.length + index] = value;
        return true;
      }
      target[prop] = value;
      return true;
    },
  });
}

const proxiedArr = getNegativeIndex(arr);

console.log(proxiedArr[-1]); // Output: 50
console.log(proxiedArr[-3]); // Output: 30
proxiedArr[5] = 99;
console.log(arr); // Output: [10, 20, 30, 99, 50]

// in this proxy method we are intercepting the get and set operations on the array
// and adjusting the index accordingly when a negative index is used.
// This allows us to access and modify array elements using negative indices.
// we are mutatiung the original array when we set values using negative indices.
