import React, { Component } from 'react';

class TodosListInput extends Component{
    constructor(props){
        super(props);
        this.addTodo = this.addTodo.bind(this);
    }
    addTodo(e){
        e.preventDefault();
        let newTodo = {
            task: e.target.firstElementChild.value
        }
        this.props.onTodoAdd(newTodo);
        e.target.firstElementChild.value ="";
    }
    render() {
        return(

            <form onSubmit={this.addTodo} className="input-form">
                <input type="text" placeholder="Enter new todo"/>
                <button>Add</button>
            </form>

        )
    }
}

export default TodosListInput;
