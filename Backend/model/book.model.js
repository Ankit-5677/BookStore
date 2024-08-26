import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    name: String, 
    price: Number, 
    category: String, 
    image: String, 
    title: String
})//the way in which data will be stored
const Book = mongoose.model("Book", bookSchema);//in Book collection this schema data will be stored.

export default Book;