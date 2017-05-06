import React, { Component } from 'react';
import Time from '../Time/Time.js';
import './Toggle.css';

function SayHello (props) {
    return (
        <div className="sayHello">
            Hello, {props.userName}!
        </div>
    );
}

class Toggle extends React.Component {
	constructor(props) {
		super(props);
		this.state = {isToggleOn: true};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState(prevState => ({
			isToggleOn: !prevState.isToggleOn
		}));
	}

	render() {
		return (
			<div>
				<a onClick={this.handleClick}>
	                {this.state.isToggleOn ? 'Show time' : 'Hide time'}
				</a>
            {this.state.isToggleOn ? '' : <Time />}
			</div>
		);
	}
}

export default Toggle;