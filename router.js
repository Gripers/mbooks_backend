const router = require("express").Router();
const Book = require("./models/Book");
const Category = require("./models/Category");

router.get("/categories", async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

router.post("/categories", async (req, res) => {
  try {
    const newCategory = new Category(req.body);
    await newCategory.save();
    res.status(201).json(newCategory);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

router.get("/books", async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

router.post("/books", async (req, res) => {
  try {
    const newBook = new Book(req.body);
    await newBook.save();
    res.status(201).json(newBook);
  } catch (error) {
    res.json(error.message);
  }
});

router.patch("/books/:id", async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body);
    res.status(400).json(book);
  } catch (error) {
    res.json(error.message);
  }
});

module.exports = router;
