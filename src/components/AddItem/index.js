import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { InputTextarea } from '@bit/primefaces.primereact.inputtextarea';
import { Button as GrommetButton } from '@bit/grommet.grommet.button';
import { Button as PrimeButton } from '@bit/primefaces.primereact.button';
import { Add } from '@bit/grommet.grommet-icons.add';
import PrimereactStyle from '@bit/primefaces.primereact.internal.stylelinks';

/** 
 * @description AddItem is two buttons and textarea to write a new item, one button to add item and another one to remove all items. 
 * @example
 * <AddItem
 *  handleAddItem={(data) => console.log(`new item text is ${data.text}`)}
 *  handleRemoveAllItems={() => console.log(`click on remove all items`)}
 * />
*/
export default class AddItem extends Component {
    static propTypes = {
        /** handleAddItem is a function that can be called to get the text of a new item. */
        handleAddItem: PropTypes.func,
        /** handleRemoveAllItems is a function that can be called to remove all items. */
        handleRemoveAllItems: PropTypes.func,
        /** showRemoveAllButton determine if remove all items button will be display. */
        showRemoveAllButton: PropTypes.bool
    }

    static defaultProps = { handleAddItem: null, handleRemoveAllItems: null, showRemoveAllButton: true }

    state = {
        text: '',
        showPrimary: false
    }

    showPrimary = show => {
        if (show !== this.state.showPrimary)
            this.setState({ showPrimary: show });
    }

    addItem = () => {
        if (this.state.text === '' || !this.props.handleAddItem)
            return;
        this.props.handleAddItem({
            text: this.state.text
        });
        this.setState({ text: '' });
    }

    removeAllItems = () => {
        this.props.handleRemoveAllItems();
    }

    render() {
        const { text, showPrimary } = this.state;
        const removeAllButton = this.props.showRemoveAllButton ? <PrimeButton onClick={this.removeAllItems} label='Remove All' className='p-button-secondary' style={{ float: 'right', marginTop: 5 }} /> : '';
        return (
            <div>
                <PrimereactStyle />
                <InputTextarea value={text} rows={1} cols={30} autoResize={true} style={{ fontSize: 24, width: '100%' }} onChange={(e) => this.setState({ text: e.target.value })} />
                <GrommetButton onClick={this.addItem} icon={<Add />} onMouseEnter={() => this.showPrimary(true)} onMouseLeave={() => this.showPrimary(false)} primary={showPrimary} label='Add' style={{ marginTop: 5 }} />
                {removeAllButton}
            </div>)
    }
}