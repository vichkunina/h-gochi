import React, { Component } from 'react';
import b_ from 'b_';

import NewGame from '../newGame';
import Volume from '../volume';
import Characteristic from '../characteristic';
import Suggest from '../suggest';
import Logo from '../logo';

import './index.css';
import mix from '../../utils/mix';

const b = b_.with('toolbar');

const resourceList = ['mood', 'food', 'energy'];

export default class Toolbar extends Component {
    render() {

        const className = mix(b('resources'), b('item'));

        return (
            <section className={b()}>
                <Logo />
                <div className={b('separator')}/>
                <section className={className}>
                    {
                        resourceList.map(resource => 
                            <Characteristic
                                resource={resource}
                                key={resource}
                                />
                        )
                    }
                </section>
                <div className={b('separator')}/>
                <Volume
                    mixClass={b('item')}
                    />
                <div className={b('separator')} />
                <Suggest
                    mixClass={b('item')}
                    />
                <div className={b('separator')} />
                <NewGame
                    mixClass={b('item')}
                    />
            </section>
        );
    }
}
