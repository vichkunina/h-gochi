import React, { Fragment } from 'react';
import b_ from 'b_';
import './index.css';

const b = b_.with('nose');

export default function Nose(props) {
    const { sides } = props;

	return (
        <Fragment>
		    <img alt="nose" className={b()} src="/static/nose.svg" />
            {
                sides.map(side => (
                    <img
                        alt='' 
                        className={b('nostril', { side })}
                        src="/static/nostril.svg"
                        />
                ))
            }
        </Fragment>
	);
}
