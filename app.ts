import express from "express";
import bodyParser from "body-parser";
const PORT = 5050;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
