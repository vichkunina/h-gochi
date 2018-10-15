import React, { Component } from 'react';
import b_ from 'b_';

import './App.css';
import Toolbar from '../src/components/toolbar';
import Field from '../src/components/game-field';
import AppContext from '../src/components/context';

const b = b_.with('app');

export default class App extends Component {
    state = {
        volume: 50
    };
    render() {
        const context = {
            ...this.state,
            onVolChange: this.onVolChange
        };
        
        return (
            <AppContext.Provider value={context}>
                <div className={b()}>
                    <Toolbar />
                    <Field />
                </div>
            </AppContext.Provider>
        );
    }

    onVolChange = ({ target: { value } }) => {
        this.setState({ volume: value });
    }
}
