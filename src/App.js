import React, { Component } from 'react';
import TodosList from './TodosList';
import TodosListInput from './TodosListInput'

const todos = [{task: "Do something"},{task: "Do something else"}];

class App extends Component {
    constructor(props){
        super(props);
        this.state = {todos};
    }
    handleAddTodo(newTodo){
        let todosCopy = this.state.todos.slice();
        todosCopy.unshift(newTodo);
        this.setState({todos: todosCopy});
    }
    render(){
        return(
            <div>
                <h1 className="header">ToDo App</h1>
                <TodosListInput onTodoAdd = {this.handleAddTodo.bind(this)}/>
                <TodosList todos = {this.state.todos}
                       saveTodo = {this.handleSaveTodo.bind(this)}
                        deleteTodo = {this.handleDeleteTodo.bind(this)}/>

            </div>
        );
    }
    handleSaveTodo(oldTodo, newTodo){
        const foundTodo = this.state.todos.find(todo => todo.task === oldTodo);
        foundTodo.task = newTodo;
        this.setState({todos: this.state.todos})
    };
    handleDeleteTodo(todoToDelete){
        let newTodos = this.state.todos.filter(todo => todo.task !==todoToDelete);
        this.setState({todos: newTodos});
        console.log(todoToDelete);
    }
}

export default App;