// // sync 
const fs = require('fs')
// console.log("file write start:")
const data = "I love node js becasue node is my fast girl friend"
// try {
//     const res = fs.writeFileSync("./data/write.txt", data);
//     console.log("content write")
//     console.log(res)
// } catch (error) {
//     console.log(error.message)
// }
// console.log("content  finished ...................")


//async way
console.log("file write start:")

fs.writeFile("./data/write.txt", data, (error, data) => {
    if (error) {
        console.log(error.message)
    }
    console.log("file Content start:")
    console.log(data)
});



console.log("content  finished ...................")