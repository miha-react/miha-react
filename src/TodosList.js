import React, { Component } from 'react';
import TodosListHeader from './TodosListHeader'
import TodosListItem from './TodosListItem'

class TodosList extends Component{
    getItem(){
        return this.props.todos.map((todo,i) =>
        <TodosListItem key = {i}{...todo}{...this.props}/>)
    }
    render(){
        return(

            <table className="table">
                <TodosListHeader/>

                <tbody>
                    {this.getItem()}
                </tbody>

            </table>

        )
    }
}

export default TodosList;