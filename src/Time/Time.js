import React, { Component } from 'react';

function CurrentTime (props){
	return (
		<h1>Time: {props.date.toLocaleTimeString()}</h1>
	);
}

class Time extends React.Component {
	constructor (props) {
		super(props);
		this.state = {date: new Date()};
	}

	componentDidMount () {
		this.timerID = setInterval(
			() => this.tick(),
			1000
		);
	}

	componentWillUnmount () {
		clearInterval(this.timerID);
	}

	tick () {
		this.setState({
			date: new Date()
		});
	}

	render () {
		return (
			<div>
				<CurrentTime date={this.state.date} />
			</div>
		);
	}
}

export default Time;