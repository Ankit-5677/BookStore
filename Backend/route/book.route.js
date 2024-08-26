import express from 'express';
import { getBook } from '../controller/book.controller.js';

const router = express.Router();

router.get("/", getBook);//whenever get request is done on (/) this url then getBook function should be called.

export default router;