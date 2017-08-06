import React from 'react';
import './App.css'

const SelectBookCategory = (props) =>(

	<div className="book-shelf-changer">
	    <select onChange={props.changeBookShelf}>
	        <option value="none">Move to...</option>
	        <option value="currentlyReading">Currently Reading</option>
	        <option value="wantToRead">Want to Read</option>
	        <option value="read">Read</option>
	        <option value="none">None</option>
	    </select>
    </div>

)

export default SelectBookCategory