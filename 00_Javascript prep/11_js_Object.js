const fs = require("fs");
console.log("Start the Program");
// 5 lines ---> this is the power of (promise)

fs.readFileSync("./Hello.txt", "utf8", function (err, content) {
  if (err) {
    console.log("Error in Handleing...", err);
  } else {
    console.log("File Reading Sucessfully....", content);
    fs.writeFile("Backup.txt", content, function (err) {
      if (err) {
        console.log("Error in Handleing...", err);
      } else {
        fs.unlink("Hello.txt", function (err) {
          if (err) {
            console.log("Error in Handleing...", err);
          } else {
            console.log("File Deleted Successfully...");
          }
        });
      }
    });
  }
});

console.log("End the Program");
