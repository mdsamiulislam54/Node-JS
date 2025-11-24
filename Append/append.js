
const fs = require("fs");
const data = `\n ${new Date().toISOString()} User logged \n`;

fs.appendFileSync("./data/write.txt", data )