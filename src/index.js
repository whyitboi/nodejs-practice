import express from "express";
import { expressRouter } from "./routes.js";

const port = process.env.PORT_ENV ?? 8080;
const hostName = "localhost";
const app = express();

app.use("/", expressRouter);

app.listen(port, (error) => {
  if (error) throw new Error(error.message);
  console.log(`Server has started at ${hostName}:${port}`);
});
