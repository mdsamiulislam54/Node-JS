const fs = require('fs');
console.log("start::")
try {
    const data = fs.readFileSync("./data/bangladesh.txt", 'utf-8');
    console.log('file content:')
    console.log(data)
} catch (error) {
    console.error(error.message)
}

console.log("finished")