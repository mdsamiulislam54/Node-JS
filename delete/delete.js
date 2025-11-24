const { error } = require("console");
const fs = require("fs");

fs.writeFileSync("./temp.txt", 'this is team file');
console.log("temp file create")


if (fs.existsSync("./temp.txt")) {
    console.log("file exits");

    fs.unlinkSync("./temp.txt");
    console.log("file deleted successfully")
}

//async

fs.writeFile("./temp2.txt", 'this temp2 file', (error) => {
    if (error) return console.log(error.message);
    console.log("temp2.txt file created........");

    if (fs.existsSync("./temp2.txt")) {
        console.log("temp2 file exist");

        fs.unlink("./temp2.txt", (err) => {
            if (err) return console.log(err.messae);

            console.log("temp2 file delete successfully")
        })
    }

})