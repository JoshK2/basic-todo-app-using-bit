import React, { Component } from 'react';
import Icon from '@bit/semantic-org.semantic-ui-react.icon';

export default class TodoItem extends Component {
    state = {
        text: this.props.text,
        showRemove: false
    }

    showRemoveIcon = show => {
        if(show !== this.state.showRemove)
            this.setState({showRemove: show });
    }

    removeItem = () => {
        this.props.handleRemoveItem({
            index: this.props.index
        });
    }

    render() {
        const { text, showRemove } = this.state;
        const item = showRemove ? <>{text}<Icon onClick={() => this.removeItem()} name='remove circle' link style={{float: 'right'}} /></> : <>{text}</>;
        return <div onMouseEnter={() => this.showRemoveIcon(true)} onMouseLeave={() => this.showRemoveIcon(false)} className="toto-item">{item}</div>
    }
}