import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import BookShelf from './bookshelves.js';
import './App.css';


 class MyReads extends Component{



	state = {
		books: [],
		category:['read', 'currentlyReading', 'wantToRead']
	}
	componentDidMount(){
		BooksAPI.getAll().then((books) =>{
			this.setState({books})
		})
	}

	updateBooksCategory = (books) => {
		this.setState({
			books : books
		})
	}

	render(){

		let books = this.state.books;
		return(
				<div className="list-books">
            		<div className="list-books-title">
              			<h1>MyReads</h1>
            		</div>
           			<div className="list-books-content">
              			<div>
              				{this.state.category.map((category) => 
              				<BookShelf key={category} title = {category} books ={books} updatebooks={this.updateBooksCategory}></BookShelf>
              					)
              			
              				}
              			</div>
              		</div>
              	</div>		

			)
	}
}

export default MyReads