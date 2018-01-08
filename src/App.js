import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  handleChangeShelf = (book: any, shelf: string) => {
    BooksAPI.update(book, shelf).then(response => {
      this.getBooksOnShelf()
    })
  }

  getBooksOnShelf() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => <ListBooks onChangeShelf={this.handleChangeShelf} booksOnShelf={this.state.books}/>}/>
        <Route path="/search" render={() => <SearchBooks onChangeShelf={this.handleChangeShelf} booksOnShelf={this.state.books}/>}/>
      </div>
    )
  }
}

export default BooksApp
