import React, { Component} from 'react'
import './App.css'
import {Route, Link} from 'react-router-dom'
import MyReads from './myreads.js'
import SearchBooks from './searchbooks.js'

class BooksApp extends Component {




  render() {
    return (
      <div className="app">

         <Route path="/add" component = { SearchBooks } /> 

         <Route exact path="/" component={MyReads} />   
  
          <div className="open-search">
              <Link to="/add">Add a book</Link>
          </div>
          
      </div>
    )
  }
}

export default BooksApp
