import React from 'react';
import b_ from 'b_';

import './index.css';

const b = b_.with('ear');

export default function Ear(props) {
	const { side } = props;

	return <img alt="ear" className={b({ side })} src={`/static/${side}-ear.svg`} />;
}

