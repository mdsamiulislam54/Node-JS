const fs = require('fs');

console.log("start");

fs.readFile("./data/bangladesh.txt","utf-8", (error,data)=>{
    if(error){
        console.log(error.message)
    }

    console.log("contente::");
    console.log(data)
})

console.log("Finished")