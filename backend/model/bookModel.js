import mongoose from 'mongoose'

const bookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },

    comments: [],
})

const Book = mongoose.model('Book', bookSchema)
export default Book
