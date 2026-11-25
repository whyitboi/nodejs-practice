import { createServer } from "node:http";

const hostName = "localhost";
const port = 8080;

// const homeUrl = './index.html'
// const aboutUrl = './about.html'
// const contactUrl = './conatct.html'
// const forbidenUrl = './404.html'

const myServer = createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader("Content-type", "text/plain");
  response.end("Computron! Awaken!");
});

myServer.listen(hostName, port, () => {
  console.log(`Server has started at ${hostName}:${port}`);
});
