import React, { Component } from 'react';
import Page from './Page/Page.js';
import Form from './Form/Form.js';

class App extends React.Component {
	render() {
		return (
			<div>
				<Page />
				<Form />
			</div>
		);
	}
}

export default App;