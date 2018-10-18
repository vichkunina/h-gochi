
import React, { Component } from 'react';
import b_ from 'b_';

import mix from '../../utils/mix';

import AppContext from '../context';

import './index.css';

const b = b_.with('volume');

export default class Volume extends Component {
	render() {
		const { mixClass } = this.props;

		const className = mix(b(), mixClass);

		return (
			<section className={className}>
				<div className={b('header')}>Громкость игры</div>
				<div className={b('toogle')}>
					<div className={b('helper')}>
						-
					</div>
					<AppContext.Consumer>
						{({ volume, onVolChange }) =>
							<input 
								type="range"
								min="1" 
								max="100" 
								value={volume} 
								onChange={onVolChange} 
								className={b('slider')}
								/>
						}
					</AppContext.Consumer>
					<div className={b('helper')}>
						+
					</div>
				</div>
			</section>
		);
	}
}
