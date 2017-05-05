import React, { Component } from 'react';
import './Page.css';

const username = {
    firstName: 'Boris',
    lastName: 'Akunin'
};

function SayHello () {
    return (
        <div className="sayHello">
            Hello, {username.firstName}!
        </div>
    );
}

function Menu () {
    return (
        <div>
            <ul>
                <li>
                    <a>Main</a>
                </li>
                <li>
                    <a>Info</a>
                </li>
                <li>
                    <a>About us</a>
                </li>
                <li>
                    <a>Contacts</a>
                </li>
                <li>
                    <a>Calendary</a>
                </li>
            </ul>
        </div>
    );
}

function CurrentTime (props){
    return (
        <h1>Time: {props.date.toLocaleTimeString()}</h1>
    );
}

class Page extends React.Component {
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
                <Menu />
                <SayHello />
            </div>
        );
    }
}

export default Page;
