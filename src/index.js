import express from "express";
import path from "path";

const hostName = "localhost";
const port = process.env.PORT_ENV ?? 3000;
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

app.use((req, res) => {
  res.status(404).sendFile(path.join(import.meta.dirname, "404.html"));
});

app.listen(port, (error) => {
  if (error) throw new Error(error.message);
  console.log(`Server has started at ${hostName}:${port}`);
});
