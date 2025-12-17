import React, { Component } from "react";
import PageHeader from "../template/PageHeader";
import TodoForm from "./todoForm";
import TodoList from "./todoList";

export default class Todo extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.state = { description: '', list: []}
    }
    
    handleChange(e) {
        this.setState({...this.state, description: e.target.value})
    }

    handleAdd() {
        console.log(this)
    }

    render() {
        return (
            <div>
                <PageHeader name="Tarefas" small="Cadastro" />
                <TodoForm 
                    description={this.state.description}
                    handleChange={this.handleChange} 
                    handleAdd={this.handleAdd} />
                <TodoList />
            </div>
        )
    }
}