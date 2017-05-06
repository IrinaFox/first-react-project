import React, { Component } from 'react';
import './Page.css';
import Toggle from '../Toggle/Toggle.js';

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
            </ul>
        </div>
    );
}

class Page extends React.Component {
    render () {
        return (
            <div>
                <Menu />
                <Toggle />
            </div>
        );
    }
}

export default Page;