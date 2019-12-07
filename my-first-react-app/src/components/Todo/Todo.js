import React, { Component } from 'react';
import List from './List';
import uuidv4 from 'uuid/v4';
import './Todo.css';

class Todo extends Component {

    constructor() {
        super();

        // Initial state...
        this.state = {
            task: '',
            items: []
        };
    }


    componentWillMount() {
        // Setting default tasks...
        this.setState({
            items: [
                {
                    id: uuidv4(),
                    task: 'Pay the rent',
                    completed: false
                },
                {
                    id: uuidv4(),
                    task: 'Go to the gym',
                    completed: false
                },
                {
                    id: uuidv4(),
                    task: 'Do my homework',
                    completed: false
                }
            ]
        });
    }


    handleOnChange = e => {
        const { target: { value } } = e;

        // Updating our task state with the input value...
        this.setState({
            task: value
        });
    }

    handleOnSubmit = e => {
        // Prevent default to avoid the actual form submit...
        e.preventDefault();

        if(this.state.task!==''){
            // Once is submited we reset the task value and we push the new task to the items array.
            this.setState({
                task: '',
                items: [
                    ...this.state.items,
                    {
                        id: uuidv4(),
                        task: this.state.task,
                        completed: false
                    }
                ]
            });
        }
    }

    markAsCompleted = (id) =>  {
        let items = this.state.items.map((item, i) => {
          if (item.id !== id) 
            return item
          return {...item, ['completed']: true}
        })
        this.setState({items})
    }

    /*
    markAsCompleted = id => {
        // Finding the task by id...
        const foundTask = this.state.items.find(task => task.id === id);

        // Updating the completed status...
        foundTask.completed = true;

        console.log(...this.state.items);
        //console.log(...foundTask);
        // Updating the state with the new updated task...
        this.setState({
            items: [
                ...this.state.items,
                ...foundTask
            ]
        });
    }
    */
   
    removeTask = id => {
        // Filtering the tasks by removing the specific task id...
        const filteredTasks = this.state.items.filter(task => task.id !== id);

        // Updating items state...
        this.setState({
            items: filteredTasks
        });
    }

    render() {

        return (
            <div className="Todo">
                <h1>New Task:</h1>
                <form onSubmit={this.handleOnSubmit}>
                    <input
                    value={this.state.task}
                    onChange={this.handleOnChange}
                    />
                </form>
                <List
                    items={this.state.items}
                    markAsCompleted={this.markAsCompleted}
                    removeTask={this.removeTask}
                />
            </div>
        );
    }
}
export default Todo;