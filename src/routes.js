import { Router } from "express";
import path from "node:path";

export const expressRoute = Router();

const pages = {
  "/": "index.html",
  "/about": "about.html",
  "/contact-me": "contact-me.html",
};

//can use a loop
for (const [route, file] of Object.entries(pages)) {
  expressRoute.get(route, (req, res) => {
    res.sendFile(path.join(import.meta.dirname, file));
  });
}

//or can sendFile a nested get in use. This instead of both of commented-out blocks
// expressRoute.use((req, res) => {
//   const file = pages[req.path];
//   if (file) res.sendFile(path.join(import.meta.dirname, file));
//   else res.status(404).sendFile(path.join(import.meta.dirname, "404.html"));
// });
