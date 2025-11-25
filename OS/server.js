const os = require('os');
console.log('Operating System Information:');
console.log(`Platform: ${os.platform()}`);
console.log(`Architecture: ${os.arch()}`);
console.log(`CPU Cores: ${os.cpus().length}`);
console.log(`Total Memory: ${(os.totalmem() / (1024 ** 3)).toFixed(2)} GB`);
console.log("release:", os.release());
console.log("CPU Sped:", os.cpus()[0].speed, "MHz");

console.log(`Free Memory: ${(os.freemem() / (1024 ** 3)).toFixed(2)} GB`);
