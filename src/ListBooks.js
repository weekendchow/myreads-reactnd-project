import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import BookShelf from './BookShelf'

function ListBooks (props) {

  ListBooks.propTypes = {
    booksOnShelf: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired
  }

  const { booksOnShelf, onChangeShelf } = props

   return (
     <div className="list-books">
       <div className="list-books-title">
         <h1>MyReads</h1>
       </div>
       <div className="list-books-content">
         <div>
         <BookShelf
         key="currently"
         books={booksOnShelf.filter(book => book.shelf === "currentlyReading")}
         onChangeShelf={onChangeShelf}
         shelftitle="Currently Reading"
       />
       <BookShelf
         key="wantToRead"
         books={booksOnShelf.filter(book => book.shelf === "wantToRead")}
         onChangeShelf={onChangeShelf}
         shelftitle="Want to Read"
       />
       <BookShelf
         key="read"
         books={booksOnShelf.filter(book => book.shelf === "read")}
         onChangeShelf={onChangeShelf}
         shelftitle="Read"
       />
         </div>
       </div>
       <div className="open-search">
         <Link to="/search">Add a book</Link>
       </div>
     </div>
   )
}


export default ListBooks
