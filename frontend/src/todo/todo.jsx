import React, { Component } from "react";
import axios from "axios";

import PageHeader from "../template/PageHeader";
import TodoForm from "./todoForm";
import TodoList from "./todoList";

const URL = 'http://localhost:3005/api/todos'

export default class Todo extends Component {

    constructor(props) {
        super(props);
        this.state = { description: '', list: [] }

        this.handleSearch = this.handleSearch.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this);
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this);

        this.refresh();
    }

    // Alterações no método refresh para permitir busca personalizada (case sensitive)
    refresh(description = '') {
        const search = description ? `&description__regex=${description}` : ''
        axios.get(`${URL}?sort=-createdAt${search}`)
            .then(resp => this.setState({ ...this.state, description, list: resp.data }))
    }

    handleSearch(){
        this.refresh(this.state.description)
        console.log(this.state.description)
    }

    handleChange(e) {
        this.setState({ ...this.state, description: e.target.value })
    }

    handleAdd() {
        const description = this.state.description
        axios.post(URL, { description })
            .then(resp => this.refresh())
    }

    handleRemove(todo) {
        axios.delete(`${URL}/${todo._id}`)
            .then(resp => this.refresh(this.state.description))
    }

    handleMarkAsDone(todo) {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: true })
            .then(resp => this.refresh(this.state.description))
    }

    handleMarkAsPending(todo) {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: false })
            .then(resp => this.refresh(this.state.description))
    }

    render() {
        return (
            <div>
                <PageHeader name="Tarefas" small="Cadastro" />
                <TodoForm
                    description={this.state.description}
                    handleSearch={this.handleSearch}
                    handleChange={this.handleChange}
                    handleAdd={this.handleAdd} />
                
                <TodoList 
                    list={this.state.list}
                    handleMarkAsDone={this.handleMarkAsDone}
                    handleMarkAsPending={this.handleMarkAsPending}
                    handleRemove={this.handleRemove} />
            </div>
        )
    }
}