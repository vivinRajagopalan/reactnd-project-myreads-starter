import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Book from './books.js';

 class BookShelf extends Component{
 	static propTypes={
 		books: PropTypes.array.isRequired,
 		updatebooks: PropTypes.func.isRequired,
 		title: PropTypes.string.isRequired
 	}


  updateTitle(title){

    if (title === "read"){
      return "Read"
    } else if (title === "currentlyReading"){
      return "Currently Reading"
    } else if (title === "wantToRead"){
      return "Want To Read"
    }
  }
	render(){
    const title = this.props.title
		return(
			 <div className="bookshelf">
                  <h2 className="bookshelf-title">{this.updateTitle(title)}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      
                  			{this.props.books.filter(book => book.shelf === this.props.title).map((book)=>

                  				<li key ={book.id}>
                  					<Book key ={book.id} book = {book} updatebooks = {this.props.updatebooks}></Book>

                  				</li>
                  				)
                  			}
                      
                    </ol>
                  </div>
                </div>
			)
	}
}

	export default BookShelf
