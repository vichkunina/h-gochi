import React, { Fragment } from 'react';
import b_ from 'b_';

import mix from '../../utils/mix';

import './index.css';

const b = b_.with('eye');

const images = ['eyeball', 'pupil', 'highlight'];

export default function Eye(props) {
    const { side } = props;
	return (
        <Fragment>
            {images.map(imageName =>
                <img
                    alt={imageName}
                    className={mix(b('item', { side }), b(imageName))}
                    src={`/static/${imageName}.svg`}
                    />
            )}
        </Fragment>
	);
}

