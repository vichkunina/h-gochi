
import React, { Component } from 'react';
import b_ from 'b_';

import mix from '../../utils/mix';

import AppContext from '../context';

import './index.css';

const b = b_.with('volume');

export default class Volume extends Component {
	render() {
		const { mixClass } = this.props
		return (
			<section className={mix(b(), mixClass)}>
				<div className={b('header')}>Громкость игры</div>
				<div className={b('toogle')}>
					<div className={mix(b('helper'), b({value: 'min'}))}>
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
					<div className={mix(b('helper'), b({value: 'max'}))}>
						+
					</div>
				</div>
			</section>
		);
	}
}
