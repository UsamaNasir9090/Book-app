const Book = require("../../models/book");

const ViewBook = async (req, res) => {
  try {
    const book = await Book.find();
    return res.status(200).json(book);
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};
module.exports = ViewBook;
