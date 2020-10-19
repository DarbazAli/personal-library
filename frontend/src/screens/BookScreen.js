import React, { useState, useEffect } from 'react'
import axios from 'axios'

const BookScreen = () => {
    const [books, setBooks] = useState([])

    useEffect(() => {
        const fetchBooks = async () => {
            const { data } = await axios.get('/api/books')
            setBooks(data)
        }
        fetchBooks()
    }, [])

    return (
        <div>
            <h2>Latest Books</h2>
            {books.map((book) => (
                <li key={book._id}>
                    <h3>{book.title}</h3>
                    <p>Comments: {book.commentcount}</p>
                </li>
            ))}
        </div>
    )
}

export default BookScreen
