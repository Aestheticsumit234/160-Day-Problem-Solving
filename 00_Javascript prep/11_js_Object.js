const fs = require("fs");
console.log("Game Start");

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
