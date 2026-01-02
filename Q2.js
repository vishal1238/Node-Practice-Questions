// Write a Nodejs program to convert total memory to kb, mb and gb using OS modules in Nodejs

import os from 'os';

// Get total memory in bytes
const totalMemoryBytes = os.totalmem();

// Convert memory 
const totalMemoryKB = totalMemoryBytes / 1024;
const totalMemoryMB = totalMemoryKB / 1024;
const totalMemoryGB = totalMemoryMB / 1024;

// Display Result

console.log("Total memory in Bytes:", totalMemoryBytes);
console.log("Total memory in KB:", totalMemoryKB.toFixed(2));
console.log("Total memory in MB:", totalMemoryMB.toFixed(2));
console.log("Total memory in GB:", totalMemoryGB.toFixed(2));

