import React, { Component } from 'react';
import './Page.css';

const username = {
	firstName: 'Boris',
	lastName: 'Akunin'
};

class Page extends Component {
	render() {
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
				<p>Hello, {username.firstName}!</p>
			</div>
		);
	}
}

export default Page;
