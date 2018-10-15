import React, { Component } from 'react';
import b_ from 'b_';

import './index.css';
import mix from '../../utils/mix';

const b = b_.with('characteristic');

const resourceName = {
    mood: 'Настроение',
    food: 'Сытость',
    energy: 'Энергия'
};

class Characteristic extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
  render() {
    const { resource } = this.props;

    return (
        <div className={b()}>
            <div className={b('icon')}>
                <img
                    alt={`${resource}`}
                    className={mix(b('picture'), b(resource))}
                    src={`/static/${resource}.png`}
                    />
                <div className={b('color')}>
                <img alt='wave' src="/static/wave.svg" className={b('wave')} />
                </div>
            </div>
            <span className={b('text')}>{resourceName[resource]}</span>
        </div>
    );
  }
}

export default Characteristic;
