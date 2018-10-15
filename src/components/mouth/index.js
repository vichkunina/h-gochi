import React, { Component } from 'react';
import b_ from 'b_';

import './index.css';

const b = b_.with('mouth');

export default class Mouth extends Component {
	render() {
		return <img alt="mouth" className={b()} src="/static/mouth.svg" />;
	}
}
