// import { createServer } from "node:http";
// import { pipeline } from "node:stream";
import EventEmitter from "node:events";
// import path from "path";
// import fs from "node:fs";

// const hostname = "127.0.0.1";
// const port = 3000;

// const server = createServer((request, response) => {
//   response.statusCode = 200;
//   response.setHeader("Content-type", "text/plain");
//   response.end("Hello World");
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}`);
// });
//console.log("Hello World");

//Basic GET

// async function getStuff() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const data = await response.json();
//   console.log(data);
// }

// //Basic POST

// const body = {
//   userId: 1,
//   title: "foo",
//   body: "bar",
// };

// async function postStuff() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: "POST",
//     headers: {
//       "User-Agent": "undici-stream-example",
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(body),
//   });
//   const data = await response.json();
//   console.log(data);
// }

//file system module

// const content = "Some content";
// const newContent = "neew Stuff";
// const file = "./text.txt";
// const file2 = ".//README.md"; //uses backslash instead of . for 'parent of'

// fs.writeFile(file, content, (error) => {
//   if (error) {
//     console.error(error);
//   } else {
//     console.log("File written succesfully");
//   }
// });

//add to a file you can use {flag: 'a+'} in writeFile()
// fs.appendFile(file, newContent, (error) => {
//   if (error) {
//     console.log(error.message);
//   }
//   console.log("Success");
// });

// fs.readFile(file, "utf8", (error, data) => {
//   if (error) {
//     console.log(error.message);
//   }
//   console.log(data);
// });

//remember to use try catch when using synchronous version

//postStuff().catch(console.error);
//getStuff().catch(console.error);

//reading data using streams. For best performance when reading large files

// const url = "https://www.gutenberg.org/files/2701/2701-0.txt";
// const outputFilePath = path.join(process.cwd(), "moby.md");

// async function downloadFile(url, outputPath) {
//   const response = await fetch(url);
//   if (!response.ok || !response.body) {
//     await response.body?.cancel();
//     throw new Error(`Failed to fetch ${url}. Status: ${response.status}`);
//   }
//   const fileStream = fs.createWriteStream(outputPath);
//   console.log(`Downloading file from ${url} to ${outputPath}`);

//   await pipeline(response.body, fileStream);
//   console.log("File downloaded successfully");
// }

// async function readFile(filePath) {
//   const readStream = fs.createReadStream(filePath, { encoding: "utf8" });

//   try {
//     for await (const chunk of readStream) {
//       console.log("---File chunk start---");
//       console.log(chunk);
//       console.log("---File chunk end---");
//     }
//     console.log("Finished reading file.");
//   } catch (error) {
//     console.error(`Error reading file: ${error.message}`);
//   }
// }

// try {
//   await downloadFile(url, outputFilePath);
//   await readFile(outputFilePath);
// } catch (error) {
//   console.error(`Error: ${error.message}`);
// }

//Event handling with eventEmitter
const eventEmitter = new EventEmitter(); //exposes on (the event) and emit(the callback to execute on event)

eventEmitter.on("start", () => {
  console.log("Started");
});
const doSomething = (number = 0) => {
  console.log(`The number is ${number}`);
};

eventEmitter.emit("start");
console.log(eventEmitter.eventNames());
console.log(eventEmitter.getMaxListeners());
console.log(eventEmitter.listenerCount("start"));
console.log(eventEmitter.eventNames());

eventEmitter.addListener("click", doSomething);
eventEmitter.emit("click");
