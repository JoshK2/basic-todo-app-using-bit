import React, { Component } from 'react';
import List from '@bit/semantic-org.semantic-ui-react.list';
import TodoItem from '../TodoItem';
import AddItem from '../AddItem';
import uniqueId from '@bit/lodash.lodash.unique-id';
import './style.css';
import SemanticUiStyle from '@bit/semantic-org.semantic-ui-react.internal.style-links';

class TodoApp extends Component {
  state = {
    todoList: [
      {
        id: uniqueId('item_'),
        text: 'mission 1'
      },
      {
        id: uniqueId('item_'),
        text: 'mission 2'
      },
      {
        id: uniqueId('item_'),
        text: 'mission 3'
      }
    ]
  }

  removeItem = data => {
    const newList = this.state.todoList.filter(item => {
      return item.id !== data.index
    });
    this.setState({ todoList: newList });
  }

  removeAllItems = () => {
    this.setState({ todoList: [] });
  }

  addItem = data => {
    let newList = this.state.todoList;
    newList.push({ id: uniqueId('item_'), text: data.text });
    this.setState({ todoList: newList });
  }

  render() {
    const { todoList } = this.state;
    return (
      <div className="App">
        <div className="TodoApp">
          <SemanticUiStyle />
          {todoList.length === 0 ? '' :
            <List divided style={{ fontSize: 24 }}>
              {todoList.map(item => {
                const todo = item.text;
                const id = item.id;
                return <List.Item key={id}><TodoItem text={todo} index={id} handleRemoveItem={this.removeItem} /></List.Item>
              })}
            </List>}
          <AddItem handleAddItem={this.addItem} handleRemoveAllItems={this.removeAllItems} />
        </div>
      </div>
    );
  }
}

export default TodoApp;