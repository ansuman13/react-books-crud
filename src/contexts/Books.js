import { createContext, useState } from "react";
import axios from "axios";

const BooksContext = createContext()

function Provider({ children }) {
    const [books, setBooks] = useState([])

    const fetchAllBooks = async () => {
        const response = await axios.get("http://localhost:3001/books")
        console.log(response.data)
        setBooks(response.data)
    }

    const createBook = async (value) => {
        const resp = await axios.post("http://localhost:3001/books", {title:value})
        const newBookList = [...books, resp.data ]
        setBooks(newBookList)
    }
    
    const deleteBook = async (id) => {
        await axios.delete(`http://localhost:3001/books/${id}`)
        setBooks(books.filter((book) => book.id !== id))
    }

    const updateBook = (id, newTitle) => {
        const updatedBooks = books.map((book) => {
            if(book.id === id){ return {...book, title:newTitle}} 
            return book
        })
        setBooks(updatedBooks)
    }

    const booksStateOperations = {
        books, createBook, fetchAllBooks, updateBook, deleteBook
    }

    return (<BooksContext.Provider value={booksStateOperations}>
        {children}
        </BooksContext.Provider>)
}

export default BooksContext
export { Provider } 