import express from 'express'
import asyncHandler from 'express-async-handler'

const router = express.Router()

import Book from '../model/bookModel.js'

// @desc    Fetch all books
// @route   GET /api/books
// @access  Public
router.get(
    '/',
    asyncHandler(async (req, res) => {
        const books = await Book.find({})
        res.json(books)
    })
)

/*===========================================
    @desc    Fetch single book
    @route   GET /api/books/:id
    @access  Public
=============================================*/
router.get(
    '/:id',
    asyncHandler(async (req, res) => {
        const { id } = req.params
        const book = await Book.findById(id)

        if (book) {
            res.json(book)
        } else {
            res.status(404)
            res.json({ Error: 'Book not found' })
        }
    })
)

/*===========================================
    @desc    Post a new Book
    @route   POST /api/books
    @access  Public
=============================================*/
router.post('/', (req, res) => {
    const { title } = req.body

    const newBook = new Book({
        title: title,
        comments: [],
    })

    newBook.save((err, result) => {
        if (err) res.json(err)
        res.json({ title: result.title, _id: result._id })
    })
})

export default router
