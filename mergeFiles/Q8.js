// Implement a Node.js program that reads mutuple files asynchronously, merges their content, and saves the resutt into a single output file using Promises and async/await.

import fs from "fs/promises";

async function mergeFiles(){
    try{
        const data1 = await fs.readFile("file1.txt", "utf-8");
        const data2 = await fs.readFile("file2.txt", "utf-8")
        const data3 = await fs.readFile("file3.txt", "utf-8")

        // merage content
        const MergeData = `${data1}\n${data2}\n${data3}`;

        //Write to output file
        await fs.writeFile("outfile.txt", MergeData);
        console.log("Files merged Successfully into output.txt");
        
    }catch(error){
        console.log("Error: ", error.message);    
    }
}
mergeFiles();