const { Router } = require("express");
const bookRouter = Router();

const {
  addBook,
  getAllBooks,
  updateBook,
  deleteBook,
} = require("./controllers");

bookRouter.post("/books/addbook", addBook);
bookRouter.get("/books/getallbooks", getAllBooks);
bookRouter.put("/books/updatebook", updateBook);
bookRouter.delete("/books/deletebook", deleteBook);

module.exports = bookRouter;