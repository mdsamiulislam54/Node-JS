const crypto = require('crypto');


const hashPassword = crypto.createHash("md5").update("password123").digest("hex");//not recommended for secure applications
console.log("MD5 Hash of 'password123':", hashPassword);

const sha256Hash = crypto.createHash("sha256").update("password123").digest("hex");

console.log("SHA-256 Hash of 'password123':", sha256Hash);
