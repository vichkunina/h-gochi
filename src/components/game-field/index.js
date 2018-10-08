import React, { Component } from 'react';
import './index.css';
import Pig from '../main-character'

class Field extends Component {
	render() {
		return (
			<section className="field">
				<Pig />
			</section>
		);
	}
}

export default Field;
