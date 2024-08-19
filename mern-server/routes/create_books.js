const express = require("express");
const router = express.Router();
const AddBook = require("../controllers/BookControllers/AddBook");
const ViewBook = require("../controllers/BookControllers/ViewBook");
router.post("/addbook", AddBook);
router.get("/viewbook", ViewBook);
module.exports = router;
