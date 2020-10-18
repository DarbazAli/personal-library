import mongoose from 'mongoose'

const bookSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },

        comments: [],
    },
    {
        timestamps: true,
    }
)

const Book = mongoose.model('Book', bookSchema)
export default Book
