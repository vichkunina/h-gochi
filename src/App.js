import React, { Component } from 'react';
import b_ from 'b_';

import './App.css';
import Toolbar from '../src/components/toolbar';
import Preloader from '../src/components/preloader';
import Field from '../src/components/gameField';
import AppContext from '../src/components/context';

const b = b_.with('app');

export default class App extends Component {
    state = {
        energyDegree: 60,
        moodDegree: 60,
        foodDegree: 60,
        volume: 50
    };

    componentDidMount() {
        window.onload = () => setTimeout(() => this.setState({ isContentLoaded: true }), 1000);
    }

    render() {
        const context = {
            ...this.state,
            onVolChange: this.onVolChange,
            onPropertyChange: this.onPropertyChange,
            createNewGame: this.createNewGame
        };

        const { isContentLoaded } = this.state;
        
        return (
            <AppContext.Provider value={context}>
                <div className={b()}>
                    <Preloader isContentLoaded={isContentLoaded}/>
                    <Toolbar />
                    <Field />
                </div>
            </AppContext.Provider>
        );
    }

    onVolChange = ({ target: { value } }) => this.setState({ volume: value });
    onPropertyChange = (propertyName, degree) => this.setState({ [`${propertyName}Degree`]: degree });
    createNewGame = () =>
        this.setState({
            moodDegree: 60,
            foodDegree: 60,
            energyDegree: 60
        });
}
