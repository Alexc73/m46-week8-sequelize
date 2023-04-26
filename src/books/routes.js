const { Router } = require("express");
const bookRouter = Router();
const {
  addBook,
  getAllBooks,
  getSingleBookByTitle,
  updateBookByTitle,
  deleteBookByTitle,
  deleteAll
} = require("./controllers");

bookRouter.post("/books/addbook", addBook);
bookRouter.get("/books/getallbooks", getAllBooks);
bookRouter.get("/books/getbook/:title", getSingleBookByTitle);
bookRouter.put("/books/updatebook", updateBookByTitle);
bookRouter.delete("/books/deletebook", deleteBookByTitle);
bookRouter.delete("/books/deleteallbooks", deleteAll);

module.exports = bookRouter;