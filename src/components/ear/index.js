import React from 'react';
import b_ from 'b_';

import './index.css';

const b = b_.with('ear');

const ear = (props) => {
	const { side } = props;

	return <img alt="ear" className={b({ side })} src={`/static/ear.svg`} />;
}

export default ear;
