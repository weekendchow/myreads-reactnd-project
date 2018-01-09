import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book.js'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'
import { Debounce } from 'react-throttle';


class SearchBooks extends Component {

  static propTypes = {
    booksOnShelf: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired
  }

  state = {
    query: '',
    updateBooks: []
  }

  getBooks = (e) => {

    const query = e.target.value
    this.setState({query})

    if (query) {
      BooksAPI.search(query).then((books) => {
        books.length > 0 ?  this.setState({updateBooks: books }) : this.setState({ updateBooks: [] })
      })
    } else this.setState({updateBooks: [] })

  }

  render() {
    const { booksOnShelf, onChangeShelf } = this.props
    const { query, updateBooks } = this.state

    return (
      <div className="search-books">
        <div className="search-books-bar">
        <Link className="close-search"  to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <Debounce time="400" handler="onChange">
              <input type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={this.getBooks}
              />
            </Debounce>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {updateBooks.map((book) => (
                  <Book
                    book={book}
                    books={booksOnShelf}
                    key={book.id}
                    onChangeShelf={onChangeShelf}
                  />
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBooks
