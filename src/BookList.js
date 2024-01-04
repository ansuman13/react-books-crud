import BookShow from "./BookShow"

function BookList({ books, deleteBook, updateBook}) {
    const renderedBooks = books.map((book) => <BookShow key={book.id} 
    book={book} 
    deleteBook={deleteBook}
    editBook={updateBook}
    />)
    return <div className="book-list">{renderedBooks}</div>
}
export default BookList