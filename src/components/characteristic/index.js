import React, { Component } from 'react';
import './index.css';

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
        <div className="characteristic">
            <div className="characteristic-icon">
                <img
                    className={`characteristic-picture characteristic-${resource}`}
                    src={`/static/${resource}.png`}
                    />
                <div className="characteristic-color">
                <img src="/static/wave.svg" className="characteristic-wave" />
                </div>
            </div>
            <span className="characteristic-text">{resourceName[resource]}</span>
        </div>
    );
  }
}

export default Characteristic;
