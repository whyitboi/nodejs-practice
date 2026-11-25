import { readFile } from "node:fs/promises";
import { createServer } from "node:http";
import path from "node:path";

const hostName = "localhost";
const port = 8080;

const myServer = createServer(async (request, response) => {
  response.statusCode = 200;
  response.setHeader("Content-type", "text/html");
  let filename;

  switch (request.url) {
    case "/":
      filename = "index.html";
      break;
    case "/about":
      filename = "about.html";
      break;
    case "/contact-me":
      filename = "contact-me.html";
      break;
    default:
      response.statusCode = 404;
      filename = "404.html";
      break;
  }

  const html = await readFile(
    path.join(import.meta.dirname, filename),
    "utf-8",
  );

  response.end(html);
});

myServer.listen(port, hostName, () => {
  console.log(`Server has started at ${hostName}:${port}`);
});
