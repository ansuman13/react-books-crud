import {useState} from 'react';

function BookEdit({book, updateBook}){

    const [title, setTitle] = useState(book.title)

    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }

    const handleEditFormSubmit = (e) => {
        e.preventDefault();
        updateBook(book.id, title)
    }

    return <form onSubmit={handleEditFormSubmit}>
        <lable>Title</lable>
        <input className="input" value={title} onChange={handleTitleChange}/>
        <button className="button is-primary">Save</button>
    </form>
}
export default BookEdit