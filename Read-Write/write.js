// // sync 
const fs = require('fs')
// console.log("file write start:")
const data = "I love node js becasue node is my fast impress"
try {
    const res = fs.writeFileSync("./data/write.txt", data);
    console.log("content write")
    console.log(res)
} catch (error) {
    console.log(error.message)
}
console.log("content  finished ...................")


//async way


const data2 = "I love node js becasue node is my second impress"
console.log("file write start:")

fs.writeFile("./data/write2.txt", data2, (error, data) => {
    if (error) {
        console.log(error.message)
    }
    console.log("file Content start:")
    console.log(data)
});



console.log("content  finished ...................")