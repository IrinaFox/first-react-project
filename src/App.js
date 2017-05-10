import React, { Component } from 'react';
import Page from './Page/Page.js';
import Form from './Form/Form.js';
import CreationNewTaskForm from './Tasks/Tasks.js';

class App extends React.Component {
    render() {
        return (
            <div>
                <Page />
                <Form />
                <CreationNewTaskForm />
            </div>
        );
    }
}

export default App;