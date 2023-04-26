const Book = require("../books/model");
const Genre = require("./model");

const addGenre = async (req, res) => {
  try {
    const genre = await Genre.create({
      genre: req.body.genre,
    });
    res
      .status(201)
      .json({ message: "success, genre has been created", genre: genre });
  } catch (error) {
    res.status(501).json({ message: "Validation error", error });
  }
};

const getAllGenres = async (req, res) => {
  try {
    const genres = await Genre.findAll();

    res.status(201).json({ message: "success", genres: genres });
  } catch (error) {
    res.status(501).json({ message: "Validation error", error });
  }
};

const getGenreAndBooks = async (req, res) => {
  try {
    const genre = await Genre.findOne({
      where: { genre: req.params.genre },
      include: Book,
    });
    if (!genre) {
      return res.status(404).json({ message: "Genre not found" });
    }

    res.status(200).json({ message: "success", genre: genre });
  } catch (error) {
    res.status(501).json({ message: "Validation error", error });
  }
};

module.exports = {
  addGenre,
  getAllGenres,
  getGenreAndBooks,
};