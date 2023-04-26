const { Router } = require("express");
const authorRouter = Router();
const { addAuthor, deleteAllAuthors, deleteAuthorByName, getAllAuthors, getAuthorAndBooks } = require("./controllers");

authorRouter.post("/authors/addauthor", addAuthor);
authorRouter.get("/authors/getallauthors", getAllAuthors);
authorRouter.get("/authors/getauthorandbooks/:authorname", getAuthorAndBooks);
authorRouter.delete("/authors/deleteauthor", deleteAuthorByName);
authorRouter.delete("/authors/deleteallauthors", deleteAllAuthors);



module.exports = authorRouter;