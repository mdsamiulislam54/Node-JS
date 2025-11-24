const path = require("path");

console.log("current path:", __filename);
console.log("current path:", __dirname);


console.log("\n" + "-".repeat(50)+"\n");

const filepath = "/user/md-shamiul/desktop/node.js";

console.log("file path:", filepath)
console.log("file dir:", path.dirname(filepath) );
//base name

console.log("file baseName:", path.basename(filepath) );       
console.log("file baseName:", path.extname(filepath) );       
//extention

console.log("file Name:", path.basename(filepath, path.extname(filepath)) );   

console.log("\n" + "-".repeat(50)+"\n");

//parse file
const parsed = path.parse(filepath);
console.log("file paresd:", parsed);

// formate 

console.log("Formate Path:" , path.format(parsed))


console.log("\n" + "-".repeat(50)+"\n");