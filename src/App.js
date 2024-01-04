import { useEffect, useState } from "react"
import BookCreate from "./BookCreate"
import BookList from "./BookList"
import axios from "axios"

function App(){

    const [books, setBooks] = useState([])

    const fetchAllBooks = async () => {
        const response = await axios.get("http://localhost:3001/books")
        console.log(response.data)
        setBooks(response.data)
    }

    useEffect(fetchAllBooks, [])

    // fetchAllBooks()

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

    return <div className="app">
        <BookList books={books} deleteBook={deleteBook} updateBook={updateBook}/>
        <BookCreate createBook={createBook} />
    </div>
 }

 export default App