import React, { Component } from 'react';
import { InputTextarea } from '@bit/primefaces.primereact.inputtextarea';
import { Button as GrommetButton } from '@bit/grommet.grommet.button';
import { Add } from '@bit/grommet.grommet-icons.add';
import { Button as PrimeButton } from '@bit/primefaces.primereact.button';

export default class AddItem extends Component {
    state = {
        text: '',
        showPrimary: false
    }

    showPrimary = show => {
        if (show !== this.state.showPrimary)
            this.setState({ showPrimary: show });
    }

    addItem = () => {
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
        return (
            <div>
                <InputTextarea value={text} rows={1} cols={30} autoResize={true} style={{ fontSize: 24, width: '100%' }} onInput={(e) => this.setState({ text: e.target.value })} />
                <GrommetButton onClick={this.addItem} icon={<Add />} onMouseEnter={() => this.showPrimary(true)} onMouseLeave={() => this.showPrimary(false)} primary={showPrimary} label='Add' style={{ marginTop: 5}} />
                <PrimeButton onClick={this.removeAllItems} label='Remove All' className='p-button-secondary' style={{float: 'right', marginTop: 5}} />
            </div>)
    }
}