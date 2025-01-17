const { format } = require("date-fns");
const current = new Date();
const date = format(current, "yyyy-MM-dd");
const Book = require("../../models/book");
const AddBook = async (req, res) => {
  try {
    const newBook = new Book({
      book_name: req.body.book_name,
      book_author: req.body.book_author,
      book_price: req.body.book_price,
      book_publish_date: date,
    });
    const saveBook = await newBook.save();
    res.json(saveBook);
  } catch (err) {
    console.log(err);
  }
};

module.exports = AddBook;
