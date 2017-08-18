import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import { Link } from 'react-router-dom';
import Book from './books.js';
import './App.css';
import keyIndex from 'react-key-index';


class SearchBooks extends Component{

	state ={
		books: [],
		allbooks: []
	}

	componentDidMount(){
		BooksAPI.getAll().then((allbooks) =>{
			this.setState({
				allbooks: allbooks
			})
		})
	}

	searchBooksAsOneTypes = (e) => {
		const query = e.target.value;
		const allbooks = this.state.allbooks;
		var books=[];
		{query &&
			BooksAPI.search(query, 10).then((searchBooks)=>{
			if(!searchBooks.error)
				{
					for(var searchBook of searchBooks){
						for(var shelfBook of allbooks){
							if(shelfBook.id === searchBook.id){
								searchBook.shelf = shelfBook.shelf;
							}
						}
						books.push(searchBook);
					}
					this.setState({books: books})
				}		
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
		searchBookResults = keyIndex(searchBookResults,1);

		return(

			  <div className="search-books">
            	<div className="search-books-bar">
              		<Link className="close-search" to = "/">Close</Link>
              		<div className="search-books-input-wrapper"  >
                		<input type="text"  placeholder="Search by title or author" onKeyUp={this.searchBooksAsOneTypes}/>
              		</div>
            	</div>
              <div className="search-books-results">
              <div className="list-books">
              <div className="list-books-content">
              <div>
              <div className="bookshelf">
               <div className="bookshelf-books">
              	<ol className="books-grid">
              		
              			{searchBookResults && !searchBookResults.error && searchBookResults.map((book)=>
              				<li>
              				<Book key={book.id} book={book} updatebooks={this.updateBooksCategory}></Book>
              				</li>
              			)}
              		

              	</ol>
            	</div>
            	</div>
            	</div>
            	</div>
            	</div>
            	</div>
          	  </div>

			)
	}
}

export default SearchBooks
