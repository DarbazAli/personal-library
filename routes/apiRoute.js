import express from 'express'
import asyncHandler from 'express-async-handler'

const router = express.Router()

/* 
    #1 POST Title to book llist /api/books -> DONE
    #2 GET List of All bokks - GET /api/books -> DONE
    #3 GET Single Book by id - GET /api/books/:id -> DONE
    #4 POST Comment to a book POST /api/books/:id -> DONE
    #5 DELETE Book by id    DELETE /api/books/:id 
*/

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

/*===========================================
    @desc    Post Comment to a book
    @route   POST /api/books/:id
    @access  Public
=============================================*/
router.post('/:id', (req, res) => {
    const { id, comment } = req.body

    Book.findByIdAndUpdate(id, { $push: { comments: comment } })
        .then((doc) => {
            res.json(doc)
        })
        .catch((err) => res.json(err))
})

/*===========================================
    @desc    DELETE ALL BOOKS
    @route   DELETE /api/books/
    @access  Public
=============================================*/
router.delete('/', (req, res) => {
    Book.deleteMany({})
        .then((doc) => {
            if (doc) {
                res.json({ message: 'complete delete successful' })
            } else {
                res.json({ message: 'book list is empty' })
            }
        })
        .catch((err) => res.json(err))
})

/*===========================================
    @desc    DELETE book by id
    @route   DELETE /api/books/:id
    @access  Public
=============================================*/
router.delete('/:id', (req, res) => {
    const { book_id } = req.body
    Book.findByIdAndRemove(book_id)
        .then((doc) => {
            if (doc) {
                res.json({ message: 'Delete successful' })
            } else {
                res.json({ Error: `${book_id} not found` })
            }
        })
        .catch((err) => res.json(err))
})

export default router
