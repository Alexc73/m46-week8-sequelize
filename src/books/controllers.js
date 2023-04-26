const Book = require("./model");


const addBook = async (req, res) => {
  try {
    const book = await Book.create({
      title: req.body.title,
      author: req.body.author,
      AuthorId: req.body.AuthorId,
      genre: req.body.genre,
      GenreId: req.body.GenreId,
    });
    res.status(201).json({ message: "success", book: book });
  } catch (error) {
    res.status(501).json({ message: "Validation error", error });
  }
};

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.findAll();

    res.status(201).json({ message: "success", books: books });
  } catch (error) {
    res.status(501).json({ message: "Validation error", error });
  }
};

const getSingleBookByTitle = async (req, res) => {
  const { title } = req.params;

  try {
    const book = await Book.findOne({ where: { title } });
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.status(200).json({ message: "success", book: book });
  } catch (error) {
    res.status(501).json({ message: "Validation error", error });
  }
};

const updateBookByTitle = async (req, res) => {
  const { title, newAuthor, newGenre, newTitle } = req.body;

  try {
    const book = await Book.findOne({ where: { title } });

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    await book.update({
      author: newAuthor,
      title: newTitle,
      genre: newGenre,
    });

    res.status(200).json({ message: "Book updated successfully", book: book });
  } catch (error) {
    res.status(501).json({ message: "Validation error", error });
  }
};

const deleteBookByTitle = async (req, res) => {
  const { title } = req.body;

  try {
    const book = await Book.destroy({ where: { title } });
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.status(201).json({ message: "Book deleted successfully", book: book });
  } catch (error) {
    res.status(501).json({ message: "Validation error", error });
  }
};

const deleteAll = async (req, res) => {
  try {
    await Book.destroy({ where: {} });
    res.status(200).json({ message: "All books deleted" });
  } catch (error) {
    res.status(501).json({ message: "Validation error", error });
  }
};

module.exports = {
  addBook,
  getAllBooks,
  getSingleBookByTitle,
  updateBookByTitle,
  deleteBookByTitle,
  deleteAll,
};