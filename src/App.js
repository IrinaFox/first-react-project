import React, { Component } from 'react';
import Page from './Page/Page.js';
import Form from './Form/Form.js';
import Tasks from './Tasks/Tasks.js';

class App extends React.Component {
    render() {
        return (
            <div>
                <Page />
                <Form />
                <Tasks />
            </div>
        );
    }
}

export default App;