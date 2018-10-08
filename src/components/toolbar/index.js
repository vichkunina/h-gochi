import React, { Component } from 'react';
import './index.css';
import NewGame from '../new-game'
import Volume from '../volume'
import Characteristic from '../characteristic'
import Suggest from '../suggest'
import Logo from '../logo'

const resourceList = ['mood', 'food', 'energy'];
class Toolbar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    };

    render() {
        
        return (
            <section className="toolbar">
                <Logo />
                <div className="separator" />
                <section className="resources toolbar-item">
                    {
                        resourceList.map(resource => 
                            <Characteristic
                                resource={resource}
                                key={resource}
                                />
                        )
                    }
                </section>
                <div className="separator" />
                <Volume />
                <div className="separator" />
                <Suggest />
                <div className="separator" />
                <NewGame />
            </section>
        );
    }
}

export default Toolbar;
