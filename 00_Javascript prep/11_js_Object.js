// const { rejects } = require("assert");
// const fs = require("fs");
// const fsv2 = require("fs/promises");
// const { resolve } = require("path");

// console.log("Game Start");

// --------------------------- Using Promise -------------------------------
// const fetech = fsv2
//   .readFile("Hello.txt", "utf-8")
//   .then((content) => fsv2.writeFile("Demo.txt", content))
//   .then(() => fsv2.unlink("Hello.txt"))
//   .catch((err) => console.log(err));

//
//
// --------------------------- Custome Promise -------------------------------
// function readFileWithPromise(filePath, endcoding) {
//   return new Promise((resolve, reject) => {
//     fs.readFile(filePath, endcoding, function (err, content) {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(content);
//       }
//     });
//   });
// }

// function writeFileWithPromise(filePath, content) {
//   return new Promise((resolve, reject) => {
//     fs.writeFile(filePath, content, function (err, data) {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// }

// function unlinkFileWithPromise(filePath) {
//   return new Promise((resolve, reject) => {
//     fs.unlink(filePath, function (err) {
//       if (err) {
//         reject(err);
//       } else {
//         resolve("File Deleted");
//       }
//     });
//   });
// }

// const fetechWithCustomPromise = readFileWithPromise("Hello.txt", "utf-8")
//   .then((content) => writeFileWithPromise("Demo.txt", content))
//   .then(() => unlinkFileWithPromise("Hello.txt"))
//   .catch((err) => console.log(err));

// --------------------------- Using Callback -------------------------------
fs.readFile("Hello.txt", "utf-8", function (err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
    fs.writeFile("Backup.txt", data, function (err, data) {
      if (err) {
        console.log("Error in File creation and copy", err);
      } else {
        console.log("File Created sucessfully");
        fs.unlink("Hello.txt", function (err) {
          if (err) {
            console.log(err);
          } else {
            console.log("File Deleted");
          }
        });
      }
    });
  }
});

// custom Promise

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
console.log("Promise Ending....");
getData("https://jsonplaceholder.typicode.com/todos")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
