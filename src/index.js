import express from "express";
import path from "path";

/*router start */
const hostName = "localhost";
const port = process.env.PORT_ENV ?? 8080;
const pages = {
  "/": "index.html",
  "/about": "about.html",
  "/contact-me": "contact-me.html",
};

const app = express();

for (const [route, file] of Object.entries(pages)) {
  app.get(route, (req, res) => {
    res.sendFile(path.join(import.meta.dirname, file));
  });
}
/*router end */

// app.use((req, res) => {
//   app.get(req.url, (request, response) => {
//     res.sendFile(
//       response.sendFile(path.join(import.meta.dirname, pages[req.url])),
//     );
//   });
// });

app.use((req, res) => {
  res.status(404).sendFile(path.join(import.meta.dirname, "404.html"));
});

app.listen(port, (error) => {
  if (error) throw new Error(error.message);
  console.log(`Server has started at ${hostName}:${port}`);
});
