import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";//it is a middleware

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;
//connect to mongodb

try{
    mongoose.connect(URI, {
        serverSelectionTimeoutMS: 5000
    });
    console.log("Connected to mongoDB");
} catch(error) {
    console.log("Error: ", error);
}

//defining routes

app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});