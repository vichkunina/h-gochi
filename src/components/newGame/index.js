import React, { Component } from 'react';
import b_ from 'b_';

import mix from '../../utils/mix';

import './index.css';

const b = b_.with('newgame');

export default class NewGame extends Component {
	render() {
		const { mixClass, createNewGame } = this.props;

		const className = mix(b(), mixClass);
		
		return (
			<section className={className}>
				<button
					className={b('button')}
					type="button"
					onClick={createNewGame}
					>
					Начать новую игру
				</button>
			</section>
		);
	}
}
