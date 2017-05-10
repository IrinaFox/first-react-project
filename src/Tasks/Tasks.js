import React, { Component } from 'react';

class CreationNewTaskForm extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            taskList: [],
            taskItems:[],
            taskID: '1',
            newTaskName: '',
            newTaskDescription: ''
        };

        this.taskNameWritten = this.taskNameWritten.bind(this);
        this.taskDescriptionWritten = this.taskDescriptionWritten.bind(this);
        this.createTask = this.createTask.bind(this);
    }

    taskNameWritten (event) {
        this.setState({newTaskName: event.target.value});
    }

    taskDescriptionWritten (event) {
        this.setState({newTaskDescription: event.target.value});
    }

    renderAllTasks () {
        const taskItems = this.state.taskList.map((task) =>
                <tr key={task.id}>
                    <td> {task.name} </td>
                    <td> {task.description} </td>
                </tr>
        );

        this.setState({taskItems: taskItems});

        console.log(taskItems);
    }

    createTask () {
        let newTask = {
                id: this.state.taskID,
                name: this.state.newTaskName,
                description: this.state.newTaskDescription
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
                    <p><input
                        type="text"
                        placeholder="Enter task name"
                        onChange={this. taskNameWritten} /></p>
                    <p><input
                        type="text"
                        placeholder="Enter task description"
                        onChange={this.taskDescriptionWritten} /></p>
                    <p><select>
                        <option disabled value="Choose status">Choose status</option>
                        <option defaultValue="pending">pending</option>
                        <option value="closed">closed</option>
                    </select></p>
                    <p><input type="button" value="Create" onClick={this.createTask}/></p>
                </form>
                <table>
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
                    <td> {this.props.task.name} </td>
                    <td> {this.props.task.description} </td>
                </tr>
        );
    }
}

export default CreationNewTaskForm;