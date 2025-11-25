const crypt = require('crypto');
const algorithm = 'aes-256-cbc';
const key = crypt.randomBytes(32);
const iv = crypt.randomBytes(16);

function encrypt(text) {
    const cipher = crypt.createCipheriv(algorithm, key, iv);
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
}
function decrypt(encryptedText) {
    const decipher = crypt.createDecipheriv(algorithm, key, iv);
    let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}

const message = "Hello, this is a secret message!";
const encryptedMessage = encrypt(message);
const decryptedMessage = decrypt(encryptedMessage);
console.log("Original Message:", message);
console.log("Encrypted Message:", encryptedMessage);
console.log("Decrypted Message:", decryptedMessage);

console.log("Encryption and Decryption successful:", message === decryptedMessage);