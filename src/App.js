import React, { Component } from 'react';
import TodoApp from './components/TodoApp';
import './style.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="TodoApp">
          <TodoApp />
        </div>
      </div>
    )

  }
}

export default App;