const { Router } = require("express");
const genreRouter = Router();

const { addGenre, getAllGenres, getGenreAndBooks } = require("./controllers");

genreRouter.post("/genres/addgenre", addGenre);
genreRouter.get("/genres/getallgenres", getAllGenres);
genreRouter.get("/genres/getbooksbygenre/:genre", getGenreAndBooks);



module.exports = genreRouter;