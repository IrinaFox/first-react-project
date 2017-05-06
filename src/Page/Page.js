import React, { Component } from 'react';
import './Page.css';
import Time from '../Time/Time.js';


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

class Page extends React.Component {
    render () {
        return (
            <div>
                <Time />
                <Menu />
                <SayHello />
            </div>
        );
    }
}

export default Page;