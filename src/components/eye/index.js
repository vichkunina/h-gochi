import React, { Fragment } from 'react';
import b_ from 'b_';

import mix from '../../utils/mix';

import './index.css';

const b = b_.with('eye');

const images = ['eyeball', 'pupil', 'highlight'];

const eye = (props) => {
    const { side } = props;

	return (
        <Fragment>
            {images.map(imageName => {
                const className = mix(b('item', { side }), b(imageName));

                return (
                    <img
                        alt={imageName}
                        className={className}
                        src={`/static/${imageName}.svg`}
                        />
                );
            })}
        </Fragment>
	);
}

export default eye;
