// post-build.js

const fs = require("fs");

// tsup does not directly integrate the CSS file, so we manually add the require statement here after the build.
const filePath = "./dist/index.js";
const cssRequire = 'require("./index.css");';

fs.readFile(filePath, "utf-8", (err, data) => {
  if (err) throw err;

  const newData = cssRequire + data;

  // Rewrite the file with the new data
  fs.writeFile(filePath, newData, "utf-8", (err) => {
    if (err) throw err;
    console.log("Post build successfull");
  });
});
