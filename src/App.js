import { useContext, useEffect } from "react"
import BookCreate from "./components/BookCreate"
import BookList from "./components/BookList"
import BooksContext from "./contexts/Books"


function App(){
    const {books, fetchAllBooks} = useContext(BooksContext)

    useEffect(()=>{ fetchAllBooks() }, [])

    return <div className="app">
        <BookList books={books}/>
        <BookCreate />
    </div>
 }

 export default App