import {useState} from 'react';
import { useContext } from 'react';
import BooksContext from '../contexts/Books';

function BookEdit({book, updateBook}){

    const [title, setTitle] = useState(book.title)

    const value2 = useContext(BooksContext)

    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }

    const handleEditFormSubmit = (e) => {
        e.preventDefault();
        updateBook(book.id, title)
    }

    return <form onSubmit={handleEditFormSubmit}>
        <lable>Title: {value2.value}</lable>
        <input className="input" value={title} onChange={handleTitleChange}/>
        <button className="button is-primary">Save</button>
    </form>
}
export default BookEdit