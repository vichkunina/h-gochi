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
  render() {
    const { resource } = this.props;

    const className = mix(b('picture'), b(resource));

    return (
        <div className={b()}>
            <div className={b('icon')}>
                <img
                    alt={resource}
                    className={className}
                    src={`/static/${resource}.png`}
                    />
                <div className={b('color')}>
                <img alt="wave" src="/static/wave.svg" className={b('wave')} />
                </div>
            </div>
            <span className={b('text')}>{resourceName[resource]}</span>
        </div>
    );
  }
}

export default Characteristic;
