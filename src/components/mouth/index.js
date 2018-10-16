import React from 'react';
import b_ from 'b_';

import './index.css';

const b = b_.with('mouth');

const mouth = () => 
	<img 
		alt="mouth" 
		className={b()} 
		src="/static/mouth.svg" 
		/>;

export default mouth;
