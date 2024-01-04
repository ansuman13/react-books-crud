import { useState } from "react"
import BookEdit from "./BookEdit"

function  BookShow({book, editBook, deleteBook}){
    const [showEdit, setShowEdit] = useState(false)

    const handleClick = () => {
        deleteBook(book.id)
    }

    const handleUpdateClick = () => {
        setShowEdit(!showEdit)
    }

    const updateBook = (id, title) => {
        editBook(id, title)
        setShowEdit(false)
    }

    return <div className="book-show"> 
    <img alt="books" src={`https://picsum.photos/seed/${book.id}/300/200`}/>
    <div>{book.title}</div>
        <div className="actions">
            <button className="delete" onClick={handleClick}>Delete</button>
            <button className="update" onClick={handleUpdateClick}>Update</button>
        </div>
        { showEdit ? <BookEdit 
        book={book} 
        updateBook={updateBook} />: <></>}
    </div>
}
export default BookShow 