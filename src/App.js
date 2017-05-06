import React, { Component } from 'react';
import Page from './Page/Page.js';
import Form from './Form/Form.js';
import Toggle from './Toggle/Toggle.js';

class App extends React.Component {
	render() {
		return (
			<div>
				<Page />
				<Form />
				<Toggle />
			</div>
		);
	}
}

export default App;