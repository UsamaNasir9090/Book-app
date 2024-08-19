const express = require("express");
const bodyParser = require("body-parser");

const cors = require("cors");
const db = require("./db");
const app = express();
app.use(bodyParser.json());
app.use(cors());
const addBookRouter = require("./routes/create_books");
app.use("/api/book", addBookRouter);
console.log("fffff");
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server is running on - http://localhost:${port}`);
});
