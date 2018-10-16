import React, { Component, Fragment } from 'react';
import b_ from 'b_';

import Eye from '../eye';
import Ear from '../ear';
import Nose from '../nose';
import Mouth from '../mouth';

import './index.css';

const b = b_.with('pig');

const sides = ['left', 'right'];

export default class Pig extends Component {
	render() {
		return (
			<section className={b()}>
				<img alt="pig" className={b('body')} src="/static/body.svg" />
                {
                    sides.map(side => 
                        <Fragment>
                            {Eye({side})}
                            {Ear({side})}
                        </Fragment>
                    )
                }
                {Nose({sides})}
                <Mouth />
			</section>
		);
	}
}

