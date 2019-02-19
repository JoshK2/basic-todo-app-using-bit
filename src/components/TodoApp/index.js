import React, { Component } from 'react';
import List from '@bit/semantic-org.semantic-ui-react.list';
import TodoItem from '../TodoItem';
import AddItem from '../AddItem';
import uniqueId from '@bit/lodash.lodash.unique-id';
import './style.css';
import Styles from './semantic-ui-styles'; // for semantic-ui css
// eslint-disable-next-line
import styled from 'styled-components';

class TodoApp extends Component {
  state = {
    todoList: [
      {
        id: uniqueId('item_'),
        text: 'text 1'
      },
      {
        id: uniqueId('item_'),
        text: 'text 2'
      },
      {
        id: uniqueId('item_'),
        text: 'text 3'
      },
      {
        id: uniqueId('item_'),
        text: 'text 4'
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
          <Styles />
          {todoList.length === 0 ? '' :
          <List divided style={{ fontSize: 24 }}>
            {todoList.map(item => {
              const todo = item.text;
              const id = item.id;
              console.log(`${id} is ${todo}`);
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
