import React from 'react'
import ReactDOM from 'react-dom'
import BooksApp from './App'
import {shallow} from 'enzyme'

/** 
 This course is not designed to teach Test Driven Development. 
 Feel free to use this file to test your application, but it 
 is not required.
**/

// it('renders without crashing', () => {
//   const div = document.createElement('div')
//   ReactDOM.render(<BooksApp />, div)
// })


describe('The BooksApp Component',()=>{
	it("It has one BooksApp Component",()=>{
		const app = shallow(<BooksApp/>);
		expect (app).toHaveLength(1);
	})
})


// test("Renders BooksApp Successfully",()=>{

// })


