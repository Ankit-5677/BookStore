import Book from "../model/book.model.js"

export const getBook= async (req, res) => {
    try {
        //we will find data in our database here.
        const book = await Book.find();
        res.status(200).json(book);
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json(error);
    }
};