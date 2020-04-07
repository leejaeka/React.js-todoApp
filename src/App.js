import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';
import { render } from '@testing-library/react';

class App extends Component{
    state = {
        todos: [
            {
                id: 1,
                title: 'Study STA248',
                completed: false
            },
            {
                id: 2,
                title: 'Study React.js',
                completed: false
            },
            {
                id: 3,
                title: 'Eat Dinner',
                completed: false
            }
        ]
    }
    render() {
        //console.log(this.state.todos)    //shows on console
        return (
            <div className="App">
                <Todos todos={this.state.todos}/>
            </div>
        );
    }
}

export default App;
