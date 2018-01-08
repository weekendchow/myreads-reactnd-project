# MyReads Project

This is a project for Udacity's React Fundamentals course. The goal of this project is to add the interactivity to the app by refactoring the static code using React.



## Getting Started

To get started developing right away:

* install all project dependencies with `npm install`
* start the development server with `npm start`

## What You're Getting
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms to use with the app.
├── package.json # npm package manager file.
├── public
│   ├── favicon.ico # React Icon.
│   └── index.html
└── src
    ├── App.css # Styles for the app.
    ├── App.js # (update)This is the root of the app.
    ├── App.test.js # Used for testing. Provided with Create React App.
    ├── Book.js # (new)A book with cover, title, author and shelf changer.
    ├── BookShelf.js # (new)book shelf with shelf title and list of books.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── ListBooks.js # (new)Main page of the app, contain three book shelfs.
    ├── SearchBooks.js # (new)Search page of the app.
    ├── ShelfChanger.js # (new)Change the shelf of the book.
    ├── icons # Images for the app.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles.
    └── index.js # Used for DOM rendering only.
```

Update App.js and create 5 new JS files(Book.js/BookShelf.js/ListBooks.js/SearchBooks.js/ShelfChanger.js) for each component and use import statements to include them where they are needed.

## Backend Server

The provided backend server file [`BooksAPI.js`](src/BooksAPI.js) contains the methods that need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. Extra code needed to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). More information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Reference

1. [React API](https://facebook.github.io/react/docs/react-api.html)
2. [React Training/React Router](https://reacttraining.com/react-router/web/api/BrowserRouter)
3. [Project starter template](https://github.com/udacity/reactnd-project-myreads-starter)
4. [Project Rubric](https://review.udacity.com/#!/rubrics/918/view)
