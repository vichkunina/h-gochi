import React, { Component } from 'react';
import './App.css';
import Toolbar from '../src/components/toolbar';
import Field from '../src/components/game-field';
import AppContext from '../src/components/context';
class App extends Component {
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
                <div className="App">
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

export default App;
