//OS Module

const os = require('os');

//To Know About Current OS Of System
console.log("OS Platform", os.platform());

//Returns architecture
console.log("OS Architecture", os.arch());

//Total memory
console.log(`Os Totalmemory = ${Math.round(os.totalmem()/ 1024 **3)}GB`);

//To know free-memory
console.log(`Os FreeMemory = ${Math.round(os.freemem()/ 1024 **3)}GB`);

//Home directory
console.log("Home directory", os.homedir());

//Returns an array of objects containing information about each logical CPU core.
console.log("CPU Cores", os.cpus().length);

//OS Uptime
console.log("OS Uptime", os.uptime() / 3600, 'hrs');
