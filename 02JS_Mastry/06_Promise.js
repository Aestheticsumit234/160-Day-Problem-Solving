// promise -- >  wada agr mere pas hoga to main dunga ni to nhi mana kr dunga reject/resolbe

const { rejects } = require("assert");
const { resolve } = require("dns");
const fs = require("fs");
const fsv2 = require("fs/promises");
// console.log("Code Starting,......");

fs.readFile("./Hello.txt", "utf-8", function (err, content) {
  if (err) {
    console.log("Error in file reading", err);
  } else {
    console.log("reading sucessfully", content);
  }
});
console.log("Code end,......");

// read krna or console krna

// hello read krna hai
// data copy krna hai backup.txt
// hello.txt del

function readFilewithPromise(filePath, encoding) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, encoding, function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

function writeFilewithPromise(filePath, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, data, function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

function unlinkFilewithPromise(filePath) {
  return new Promise((resolve, reject) => {
    fs.unlink(filePath, function (err) {
      if (err) {
        reject(err);
      } else {
        resolve("file Deleted Sucessfully");
      }
    });
  });
}

const fertch = readFilewithPromise("Deemon.txt", "utf-8")
  .then((res) => writeFilewithPromise("Aemmon.txt", res))
  .then(() => unlinkFilewithPromise("Deemon.txt"))
  .catch((err) => console.log(err));

fsv2
  .readFile("./Hello.txt", "utf-8")
  .then((res) => fsv2.writeFile("Deemon.txt", res))
  .then(() => fsv2.unlink("Hello.txt"))
  .catch((err) => console.log(err));

// --------- without promise
fs.readFile("./Backup.txt", "utf-8", function (err, content) {
  if (err) {
    console.log("Error in file reading", err);
  } else {
    fs.writeFile("Hello.txt", content, function (err, data) {
      if (err) {
        console.log("Error in file creting file", err);
      } else {
        fs.unlink("Backup.txt", function (err) {
          if (err) {
            console.log("Error in Deleting", err);
          } else {
            console.log("File Deleted sucessfully");
          }
        });
      }
    });
  }
});

function getData(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          reject(res.status);
        }
        return res.json();
      })
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

const url = "https://jsonplaceholder.typicode.com/todos";

getData(url)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

// 5 sec bad promise resolve ho jayega
function promises() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise resolved");
    }, 5000);
  });
}
function delayedHello() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("hello");
    }, 5000);
  });
}

console.log(delayedHello().then((data) => console.log(data)));
