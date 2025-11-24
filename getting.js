const arg = process.argv

//process.arg[0] = node path
//process.arg[1] = file path
//process.arg[2]= first actual argument

const name = arg[2] || "gust"

const time = new Date().getHours();

let getting;

if(time >12){
    getting ="Good morning"
}

if(time <18){
    getting ="Good Afternoon"
}else{
    getting="Good Evening"
}

console.log(getting, name)