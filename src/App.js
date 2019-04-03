import React, { Component } from 'react';
import TodoApp from './components/TodoApp';
import './style.css'; 

const list = [
  'mission 1',
  'mission 2',
  'mission 3'
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="TodoApp">
          <TodoApp initialTodoList={list} />
        </div>
      </div>
    )

  }
}

export default App;