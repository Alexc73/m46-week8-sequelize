const Book = require("./model")

const addBook = async (req, res) => {
    try {

        const book = await Book.create({
            title: req.body.title, 
            author: req.body.author,
            genre: req.body.genre,
        });
        res.status(201).json({message: "success", book:book});
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    addBook,
}