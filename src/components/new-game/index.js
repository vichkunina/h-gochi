import React, { Component } from 'react';
import './index.css';
class NewGame extends Component {
	render() {
		return (
			<section className="newgame toolbar-item">
				<button
					className="newgame-button" 
					type="button"
					>
					Начать новую игру
				</button>
			</section>
		);
	}
}

export default NewGame;
