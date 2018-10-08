
import React, { Component } from 'react';
import './index.css';
import AppContext from '../context';
class Volume extends Component {
	
	render() {
		const { value } = this.props
		return (
			<section className="volume toolbar-item">
				<div  className="volume-header">Громкость игры</div>
				<div className="volume-toogle">
					<div className="volume-helper volume-min">-</div>
					<AppContext.Consumer>
						{({ volume, onVolChange }) =>
							<input 
								type="range"
								min="1" 
								max="100" 
								value={volume} 
								onChange={onVolChange} 
								className="volume-slider"
								/>
						}
					</AppContext.Consumer>
					<div className="volume-helper volume-max">+</div>
				</div>
			</section>
		);
	}
}

export default Volume;
