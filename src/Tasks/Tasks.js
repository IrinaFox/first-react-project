import React, { Component } from 'react';
import './Tasks.css';

class CreationNewTaskForm extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            taskList: [],
            taskItems:[],
            taskID: '1',
            newTaskName: '',
            newTaskDescription: '',
            newTaskStatus: 'pending'
        };

        this.taskNameWritten = this.taskNameWritten.bind(this);
        this.taskDescriptionWritten = this.taskDescriptionWritten.bind(this);
        this.createTask = this.createTask.bind(this);
        this.taskStatusSelected = this.taskStatusSelected.bind(this);
    }

    taskNameWritten (event) {
        this.setState({newTaskName: event.target.value});
    }

    taskDescriptionWritten (event) {
        this.setState({newTaskDescription: event.target.value});
    }

    taskStatusSelected (event) {
        this.setState({newTaskStatus:event.target.value});
    }

    createTask () {
        let newTask = {
                id: this.state.taskID,
                name: this.state.newTaskName,
                description: this.state.newTaskDescription,
                status: this.state.newTaskStatus
            },
            newTaskID = Number(this.state.taskID) + 1;

        this.state.taskList.push(newTask);

        this.setState({
            taskID: newTaskID //newID for next new task
        });
    }

    render () {
        return (
            <div>
                <form>
                    <h1>Create new task</h1>
                    <p><input
                        type="text"
                        placeholder="Enter task name"
                        onChange={this. taskNameWritten} /></p>
                    <p><input
                        type="text"
                        placeholder="Enter task description"
                        onChange={this.taskDescriptionWritten} /></p>
                    <p><select onChange={this.taskStatusSelected}>
                        <option disabled value="Choose status">Choose status</option>
                        <option defaultValue="pending">pending</option>
                        <option value="closed">closed</option>
                    </select></p>
                    <p><input type="button" value="Create" onClick={this.createTask}/></p>
                </form>
                <table>
                    <thead>
                        <tr>
                            <td>№</td>
                            <td>NAME</td>
                            <td>DESCRIPTION</td>
                            <td>STATUS</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.taskList.map((task, i) => <Task
                            key = {i} task = {task}/>)}
                    </tbody>
                </table>
            </div>
        );
    }
}

class Task extends React.Component {
    render () {
        return (
                <tr key={this.props.task.id}>
                    <td> {this.props.task.id} </td>
                    <td> {this.props.task.name} </td>
                    <td> {this.props.task.description} </td>
                    <td> {this.props.task.status} </td>
                </tr>
        );
    }
}

export default CreationNewTaskForm;