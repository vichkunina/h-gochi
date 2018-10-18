import React, { Component } from 'react';
import b_ from 'b_';

import './index.css';

const b = b_.with('logo');

export default class Logo extends Component {
    render() {
        return <img alt="logo" className={b()} src="/static/h.svg" />;
    }
}
