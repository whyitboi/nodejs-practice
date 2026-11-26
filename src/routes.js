import { Router } from "express";
import path from "node:path";

const expressRouter = Router();

const pages = {
  "/": "index.html",
  "/about": "about.html",
  "/contact-me": "contact-me.html",
};

expressRouter.get("/{:page}", (req, res) => {
  const file = pages[`/${req.params.page ?? ""}`]; //?? "" to prevent /undefined
  if (file) res.sendFile(path.join(import.meta.dirname, file));
  else res.status(404).sendFile(path.join(import.meta.dirname, "404.html"));
});

export { expressRouter };
