import React, { Component } from 'react';
import './index.css';
import Eye from './../eye'
import Ear from './../ear'
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
                        <div>
                            <Eye side={s} key={s}/>
                            <Ear side={s} key={s}/>
                        </div>
                    )
                }
                <Nose />
                <Mouth />
			</section>
		);
	}
}

export default Pig;
