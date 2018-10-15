import React, { Component } from 'react';
import b_ from 'b_';

import mix from '../../utils/mix';

import './index.css';

const b = b_.with('newgame');

export default class NewGame extends Component {
	render() {
		const { mixClass } = this.props
		return (
			<section className={mix(b(), mixClass)}>
				<button
					className={b('button')}
					type="button"
					>
					Начать новую игру
				</button>
			</section>
		);
	}
}
