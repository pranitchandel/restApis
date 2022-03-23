const fs = require("fs");

readfile();

function readfile() {
  fs.readFile("sample.txt", (err, data) => {
    if (err) {
      return console.log(err);
    }
    fileData = data.toString().split("\n");
    const dataArray = [];
    for (data of fileData) {
      const firstData = data.split(" ").splice(1);
      firstData.unshift("*");
      dataArray.push(firstData);
    }
    const finalArray = dataArray.reduce(
      (a, b) => {
        let isPresent = false;
        for (ele of a) {
          if (JSON.stringify(ele) === JSON.stringify(b)) {
            isPresent = true;
          }
        }
        if (!isPresent) {
          a.push(b);
        }
        return a;
      },
      [dataArray[0]]
    );
    for (ele of finalArray) {
      str = ele.join(" ");
      console.log(str);
    }
  });
}
