import express from "express";

let dummy;
const moreDummy = 'x';
moreDummy = 'y';
evenMoreDummy = 'I was not declared';
const app = express();

app.get("/message", (req, res) => {
  res.send({ message: "Hello, World!" });
});

export default app;
