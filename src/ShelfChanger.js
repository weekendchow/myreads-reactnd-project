import React from 'react'
import PropTypes from 'prop-types'

function ShelfChanger (props) {

  ShelfChanger.propTypes = {
    book: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired,
  }

  const { book, books, onChangeShelf } = props

  let currentShelf = 'none'

  for (let item of books ) {
    if (item.id === book.id)  {
      currentShelf = item.shelf
      break
    }
  }

  return (
    <select defaultValue={ currentShelf } onChange={(e) => onChangeShelf(book, e.target.value)}>
      <option value="none" disabled>Move to...</option>
      <option value="currentlyReading">Currently Reading</option>
      <option value="wantToRead">Want to Read</option>
      <option value="read">Read</option>
      <option value="none">None</option>
    </select>
  )

}

export default ShelfChanger
