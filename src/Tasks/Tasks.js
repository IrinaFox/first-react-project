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
        this.deleteTask = this.deleteTask.bind(this);
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

    deleteTask (event) {
        let deletedTaskId = event.target.name,
            index,
            i;

        for (i = 0; i < this.state.taskList.length; i++) {
            let task = this.state.taskList[i];

            if (task.id == deletedTaskId) {
                index = this.state.taskList.indexOf(task);
                this.state.taskList.splice(index, 1);
                break;
            }
        }

        this.setState({taskList: this.state.taskList});
    }

    render () {
        return (
            <div>
                <form>
                    <h1>Create new task</h1>
                    <p><input
                        type="text"
                        placeholder="Enter task name"
                        onChange={this.taskNameWritten} /></p>
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
                            <td>X</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.taskList.map((task, i) => <Task
                            deleteTask={this.deleteTask}
                            key={i}
                            task={task}/>)}
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
                    <td title="delete">
                        <input type="button"
                            name={this.props.task.id}
                            value="X"
                            onClick={this.props.deleteTask}/>
                    </td>
                </tr>
        );
    }
}

export default CreationNewTaskForm;