import React, { Component } from 'react';
import TodoItem from './TodoItems';

class Todos extends Component{
    render() {
        return this.props.todos.map((todo) => (
            <TodoItem />
        ));
    }
}

export default Todos;
