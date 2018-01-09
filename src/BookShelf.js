import React from 'react'
import Book from './Book.js'
import PropTypes from 'prop-types'

function BookShelf (props) {

  BookShelf.propTypes = {
    shelftitle: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired
  }

  const { shelftitle, books, onChangeShelf } = props

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelftitle}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) => (
            <Book
            onChangeShelf={onChangeShelf}
            book={book}
            books={books}
            key={book.id}
            />
          ))}
        </ol>
      </div>
    </div>
  )
}

export default BookShelf
