import React, { Component } from 'react';
import './Page.css';

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
			</div>
		);
	}
}

export default Page;