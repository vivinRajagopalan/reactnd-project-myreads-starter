import React, { Component } from 'react';
import SelectBookCategory from './selectbookcategory.js';
import * as BooksAPI from './BooksAPI';
import PropTypes from 'prop-types';



 class Book extends Component{

 	static propTypes={
 		book: PropTypes.object.isRequired
 	}

 	onChangeBookShelf = (e) => {

 		BooksAPI.update(this.props.book, e.target.value).then((book)=> {
        BooksAPI.getAll().then((books) =>{
          this.props.updatebooks(books);
      })
 		})
  }
	render(){
		return(
		  <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: 'url(' + this.props.book.imageLinks.smallThumbnail + ')' }}>
                       <SelectBookCategory changeBookShelf={this.onChangeBookShelf} shelf={this.props.book.shelf}></SelectBookCategory>
                    </div>
                </div>
                <div className="book-title">{this.props.book.title}</div>
                <div className="book-authors">{this.props.book.author}</div>

      </div>
          )
    }

   }

export default Book
