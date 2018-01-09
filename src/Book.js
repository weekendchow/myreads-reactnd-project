import React from 'react'
import ShelfChanger from './ShelfChanger'
import PropTypes from 'prop-types'

function Book (props) {

  Book.propTypes = {
    book: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired
  }

  const { book, books, onChangeShelf } = props

  const coverImg = book.imageLinks && book.imageLinks.thumbnail ? book.imageLinks.thumbnail : "No cover avaliable"
  const title = book.title ? book.title : "No title available"

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${coverImg})` }}></div>
          <div className="book-shelf-changer">
            <ShelfChanger
              book={book}
              books={books}
              onChangeShelf={onChangeShelf}
            />
          </div>
        </div>
        <div className="book-title">{title}</div>
        {
          book.authors && book.authors.map((author, index) => (
            <div className="book-authors" key={index}>{author}</div>
        ))}
      </div>
    </li>
  )

}

export default Book
