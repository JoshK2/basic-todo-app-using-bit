import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from '@bit/semantic-org.semantic-ui-react.icon';

/**
 * Item inside the list, with remove icon.
 */
export default class TodoItem extends Component {
    state = {
        showRemove: false
    }

    showRemoveIcon = show => {
        if (show !== this.state.showRemove)
            this.setState({ showRemove: show });
    }

    removeItem = () => {
        if (this.props.index && this.props.handleRemoveItem) {
            this.props.handleRemoveItem({
                index: this.props.index
            });
        }
    }

    render() {
        const showRemove = this.state.showRemove;
        const text = this.props.text;
        const item = showRemove ? <div>{text}<Icon onClick={() => this.removeItem()} name='remove circle' link style={{ float: 'right' }} /></div> : <div>{text}</div>;
        return <div onMouseEnter={() => this.showRemoveIcon(true)} onMouseLeave={() => this.showRemoveIcon(false)} style={{ wordBreak: 'break-word' }}>{item}</div>
    }
}

TodoItem.propTypes = {
    /**
     * text to be displayed within the item
     */
    text: PropTypes.string.isRequired,

    /**
     * index is the id of the item that returned to remove it
     */
    index: PropTypes.string,

    /**
     * handleRemoveItem is a function that can be called to remove item
     */
    handleRemoveItem: PropTypes.func
}

TodoItem.defaultProps = {
    index: null,
    handleRemoveItem: null
}