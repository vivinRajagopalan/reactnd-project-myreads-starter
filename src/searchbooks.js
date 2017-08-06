import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import { Link } from 'react-router-dom';
import Book from './books.js';
import './App.css';


class SearchBooks extends Component{

	state ={
		books:[]
	}


	searchBooksAsOneTypes = (e) => {
		const query = e.target.value;
		{query && 
			BooksAPI.search(query, 10).then((books)=>{
				this.setState({books})
			})
		}

	}

	updateBooksCategory = (books) => {
		this.setState({
			books : books
		})
	}

	render(){

		let searchBookResults = this.state.books;
		return(

			  <div className="search-books">
            	<div className="search-books-bar">
              		<Link className="close-search" to = "/">Close</Link>
              		<div className="search-books-input-wrapper"  >
                		<input type="text"  placeholder="Search by title or author" onKeyUp={this.searchBooksAsOneTypes}/>
              		</div>
            	</div>
              <div className="search-books-results">
              	<ol className="books-grid">
              		<li>
              			{searchBookResults && !searchBookResults.error && searchBookResults.map((book)=>
              				<Book key={book.id} book={book} updatebooks={this.updateBooksCategory}></Book>		
              			
              			)}
              		</li>

              	</ol>
            	</div>
          	  </div>

			)
	}
}

export default SearchBooks
