// 1. Create a node.js application to demostrate the use to Zlib and stream modules
// 2.  Create a database new1 in mongodb
// - Create a new collection student in new1
// - insert 6 documents in student for regno, name and marks
// - Update the marks of the student whosse regno is 2
// - show the marks of those students in student who have more than 80 marks



import fs from 'fs';
import zlib from 'zlib';

// Create Streams
const readStream = fs.createReadStream("input.txt");
const writeStream = fs.createWriteStream("input.txt.gz")

// Create gzip stream
const gzip = zlib.createGzip();

// Pipe streams 
readStream
    .pipe(gzip)
    .pipe(writeStream)
    .on("finish", () => {
        console.log("File compressed Successfully!");
});
