import React, { Component } from 'react';

class Tasks extends React.Component {
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

    componentDidMount () {
        let localData = JSON.parse(localStorage.getItem('taskList'));
        if (localData) {
            this.setState({
                taskList: localData
            });
        }
    }
    componentDidUpdate () {
        let storageTaskList = JSON.stringify(this.state.taskList);
        localStorage.setItem('taskList', storageTaskList);
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
        return taskItems;
    }

    createTask () {
        let newTask = JSON.stringify({
                id: this.state.taskID,
                name: this.state.newTaskName,
                description: this.state.newTaskDescription
            }),
            newTaskID = Number(this.state.taskID) + 1;

        console.log(this.state.taskList);

        let newTaskList = this.state.taskList.slice();
        newTaskList.unshift(newTask);

        this.setState({
            taskList: newTaskList,
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
                    <p>{this.state.taskItems}</p>
                </form>
                <table>
                    <tbody>
                        {this.state.taskItems}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Tasks;