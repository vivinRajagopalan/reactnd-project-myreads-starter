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
	render(){
		return(
			 <div className="bookshelf">
                  <h2 className="bookshelf-title">{this.props.title}</h2>
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