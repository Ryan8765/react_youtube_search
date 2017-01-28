//this is the same as const Component = React.Component
import React, { Component } from 'react';

class SearchBar extends Component {

	constructor(props) {
		super(props);

		this.state = {term:''};
	}

	//every react method thatis class based must have a render method that returns some JSX
	render() {
		//this is how you tap into an event in the dom.  here when the input changes, run the onInputChange function.   
		return (
			<div className="search-bar">
				<input
					value= {this.state.term} 
					onChange={ (event) => this.onInputChange(event.target.value)} />

			</div>
		);
	}

	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term);
	}

	// onInputChange( event ) {
	// 	console.log(event.target.value);
	// }
}


export default SearchBar;

