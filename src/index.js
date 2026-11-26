import express from "express";
import { expressRoute } from "./routes";

const port = process.env.PORT_ENV ?? 8080;
const hostName = "localhost";
const app = express();

// app.use((req, res) => {
//   res.status(404).sendFile(path.join(import.meta.dirname, "404.html"));
// });

app.listen(port, (error) => {
  if (error) throw new Error(error.message);
  console.log(`Server has started at ${hostName}:${port}`);
});
