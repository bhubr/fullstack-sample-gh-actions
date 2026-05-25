import express from "express";

let dummy;
const app = express();

app.get("/message", (req, res) => {
  res.send({ message: "Hello, World!" });
});

export default app;
