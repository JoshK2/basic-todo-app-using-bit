import React, { Component } from 'react';
import PropTypes from 'prop-types';
import List from '@bit/semantic-org.semantic-ui-react.list';
import TodoItem from '../TodoItem';
import AddItem from '../AddItem';
import uniqueId from '@bit/lodash.lodash.unique-id';
import SemanticUiStyle from '@bit/semantic-org.semantic-ui-react.internal.style-links';

/**
 * TodoApp is a component that use AddItem and TodoItem components to make one app that based on few collection on bit.
 */
export default class TodoApp extends Component {
  constructor(props) {
    super(props);
    const initialTodoList = props.initialTodoList;
    const list = initialTodoList.map((element) => {
      return { id: uniqueId('item_'), text: element }
    });
    this.state = {
      todoList: list
    }
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
    const style = {
      width: '100%', height: '100%', padding: 8,
      border: '1px solid #c3c0c0',
      borderRadius: 3,
      backgroundColor: '#fafbfc'
    }
    return (
      <div style={style}>
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
    );
  }
}

TodoApp.propTypes = {
  /**
   * todoList is an optional array of list.
   */
  initialTodoList: PropTypes.array
}

TodoApp.defaultProps = {
  initialTodoList: []
}