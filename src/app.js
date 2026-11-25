import { createServer } from "node:http";

const hostname = "127.0.0.1";
const port = 3000;

const server = createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader("Content-type", "text/plain");
  response.end("Hello World");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});
//console.log("Hello World");

//Basic GET

async function getStuff() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  console.log(data);
}

//Basic POST

const body = {
  userId: 1,
  title: "foo",
  body: "bar",
};

async function postStuff() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "User-Agent": "undici-stream-example",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const data = await response.json();
  console.log(data);
}

//file system module

const fs = require("fs");

fs.getStuff().catch(console.error);
postStuff().catch(console.error);
getStuff().catch(console.error);
