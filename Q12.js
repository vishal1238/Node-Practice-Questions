import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {
  if (req.url === "/file") {
    const filePath = "./largefile.txt";
    const fileSize = fs.statSync(filePath).size;
    let sent = 0;

    const stream = fs.createReadStream(filePath);

    stream.on("data", chunk => {
      sent += chunk.length;
      console.log(`Streaming: ${((sent / fileSize) * 100).toFixed(1)}%`);
    });

    stream.pipe(res);
  } else {
    res.end("Go to /file");
  }
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
