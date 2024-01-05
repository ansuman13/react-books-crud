import { useContext, useState } from "react"
import BooksContext from "../contexts/Books"

function BookCreate(){
    const [value, setValue] = useState('')

    const {createBook} = useContext(BooksContext)

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log("handled Submit")
        createBook(value)
        setValue('')
    }

    const handleChange = (e) => {
        console.log(e.target.value)
        setValue(e.target.value)
    }

    return <div className="book-create">
            <h3>Add A Book:</h3>
            <form onSubmit={handleSubmit}>
                <input className="input" type='text' value={value} onChange={handleChange}/>
                <button className="button">Submit</button>
            </form>
        </div>
}
export default BookCreate