import React, { Component } from 'react';
import './Form.css';

class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = {value: ''};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({value: event.target.value});
	}

	handleSubmit(event) {
		if (this.state.value.length >= 2) {
			let sayHello = 'Hello, ' + this.state.value + '!!!';
			this.setState({sayHello: sayHello});
		} else {
			let sayIncorrectName = 'Sorry, the name cannot be less than 2 symbol';
			this.setState({sayHello: sayIncorrectName});
		}
	}

	render() {
		return (
			<div className="myForm">
				<input
					type="text"
					placeholder="Enter your name"
					onChange={this.handleChange} />
				<button onClick={this.handleSubmit}>
					Enter
				</button>
				<p>{this.state.sayHello}</p>
			</div>
		);
	}
}

export default Form;