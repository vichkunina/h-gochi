import React, { Component } from 'react';
import b_ from 'b_';

import Pig from '../main-character';

import './index.css';

const b = b_.with('field');

export default class Field extends Component {
	render() {
		return (
			<section className={b()}>
				<Pig />
			</section>
		);
	}
}
