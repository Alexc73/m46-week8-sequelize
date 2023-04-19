const { Router } = require("express");
const bookRouter = Router();

const { addBook, getAllBooks, updateBook } = require("./controllers");

bookRouter.post("/books/addbook", addBook);
bookRouter.get("/books/getallbooks", getAllBooks);
bookRouter.put("/books/updatebook", updateBook);

module.exports = bookRouter;