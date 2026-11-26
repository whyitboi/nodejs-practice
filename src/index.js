import express from "express";

const hostName = "localhost";
const port = process.env.PORT_ENV ?? 3000;
const pages = {
  "/": "index.html",
  "/about": "about.html",
  "/contact-me": "contact-me.html",
};

const app = express();
const filename = pages["/"] ?? "404.html";
//have i implemented this well and is there a way I can get the addressed passed before the callbak in get?

app.get(filename, (req, res) => {
  res.send(); // what do i send here?
});

// const myServer = createServer(async (request, response) => {
//   response.statusCode = 200;
//   response.setHeader("Content-type", "text/html");

//   const filename = pages[request.url] ? pages[request.url] : "404.html";

//   const html = await readFile(
//     path.join(import.meta.dirname, filename),
//     "utf-8",
//   );

//   response.end(html);
// });

app.listen(port, (error) => {
  if (error) throw error;
  console.log(`Server has started at ${hostName}:${port}`);
});
