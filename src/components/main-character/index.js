import React, { Component } from 'react';
import './index.css';
import Eye from './../eye'
import Nose from './../nose'
import Mouth from './../mouth'

const sides = ['left', 'right'];
class Pig extends Component {
	render() {
		return (
			<section className="body field-item">
				<img className="pig-body" src="/static/body.svg" />
                {
                    sides.map(s => 
                        <Eye side={s} key={s}/>
                    )
                }
                <Nose />
                <Mouth />
			</section>
		);
	}
}

export default Pig;
