import React, { Component } from 'react';

class TodosListItem extends Component{
    constructor(props){
        super(props);
        this.state = {
            isEditing: false
        };
        this.onEdit = this.onEdit.bind(this);
        this.editMode = this.editMode.bind(this);
        this.onCancel = this.onCancel.bind(this);
        this.onSave = this.onSave.bind(this);
        this.onSave = this.onSave.bind(this);
    }
    onEdit(){
        this.setState({isEditing: true});
    }
    onCancel(){
        this.setState({isEditing:false})
    }
    editMode(){
        if(this.state.isEditing){
            return (
                <td>
                    <button onClick={this.onSave}>Save</button>
                    <button onClick={this.onCancel}>Cancel</button>
                </td>
            )
        }return (
            <td>
                <button onClick={this.onEdit}>Edit</button>
                <button onClick={this.props.deleteTodo.bind(this, this.props.task)}>Delete</button>
            </td>
        )
    }
    editTodosMode(){

        if(this.state.isEditing){
        return(
            <td>
                <form onSubmit={this.onSave.bind(this)}>
                <input type="text" defaultValue={this.props.task} ref='editInput'/>
                </form>
            </td>
        )

        }return(
            <td>{this.props.task}</td>
        )
    }
    onSave(e){
        e.preventDefault();
        const oldTask = this.props.task;
        const newTask = this.refs.editInput.value;
        this.props.saveTodo(oldTask, newTask);
        this.setState({isEditing:false});
    }
    onDelete(e){
        console.log(e.target);
        this.props.deleteTodo();
    }
    render() {
             return(

            <tr>
               {this.editTodosMode()}
                {this.editMode()}
            </tr>
        )
    }
}

export default TodosListItem;
