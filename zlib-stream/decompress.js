// 📌 Concept

// Stream → reads data in chunks (efficient for large files)

// Zlib → compresses/decompresses data (gzip)


import fs from 'fs';
import zlib from 'zlib';

// Create Streams 
const readStream = fs.createReadStream("input.txt.gz");
const writeStream = fs.createWriteStream("output.txt");

// Create gunzip stream
const gunzip = zlib.createGunzip();

// Pipe Streams

readStream
    .pipe(gunzip)
    .pipe(writeStream)
    .on("finish", () => {
        console.log("File Decompressed successfully!");
});