import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Todos from './components/Todos';
import { render } from '@testing-library/react';
import Header from './components/layout/header';
import About from './components/pages/About';
import AddTodo from './components/AddTodo';
import { v4 as uuidv4 } from 'uuid';

class App extends Component {
    state = {
        todos: [
            {
                id: uuidv4(),
                title: 'Study STA248',
                completed: false
            },
            {
                id: uuidv4(),
                title: 'Study React.js',
                completed: false
            },
            {
                id: uuidv4(),
                title: 'Eat Dinner',
                completed: false
            }
        ]
    }
    //TOGGLES COMPLETED
    markComplete = (id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id == id) {
                    todo.completed = !todo.completed
                } return todo;
            })
        })
    }

    delTodo = (id) => {
        this.setState({
            // spread operator '...'
            todos: [...this.state.todos.filter(todo => todo.id!=id)]
        }
        )
    }

    addTodo = (title) => {
        const newTodo = {
            id: uuidv4(),
            title: title,
            completed: false
        }
        this.setState({todos:[...this.state.todos, newTodo]})

    }

    render() {
        //console.log(this.state.todos)    //shows on console
        return (
            <Router>
                <div className="App">
                    <div className="container">
                        <Header />
                        <Route path="/" render={props => (
                            <React.Fragment>
                                <AddTodo addTodo={this.addTodo} />
                                <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
                            </React.Fragment>)} />
                        <Route path="/about" component={About}/>
                        
                    </div>
                
                </div>
            </Router>
        );
    }
}

export default App;
