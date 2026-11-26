import { readFile } from "node:fs/promises";
import { createServer } from "node:http";
import { loadEnvFile } from "node:process";
import path from "node:path";

loadEnvFile("./.env");

const hostName = "localhost";
const port = 8080;
const pages = {
  "/": "index.html",
  "/about": "about.html",
  "/contact-me": "contact-me.html",
};
const myServer = createServer(async (request, response) => {
  response.statusCode = 200;
  response.setHeader("Content-type", "text/html");

  const filename = pages[request.url] ? pages[request.url] : "404.html";

  const html = await readFile(
    path.join(import.meta.dirname, filename),
    "utf-8",
  );

  response.end(html);
});

myServer.listen(port, hostName, () => {
  console.log(`Server has started at ${hostName}:${port}`);
});
