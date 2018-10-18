import React, { Component } from 'react';
import b_ from 'b_';

import './index.css';

const b = b_.with('preloader');

export default class Preloader extends Component {
    render() {
        const { isContentLoaded } = this.props;

        return isContentLoaded ?
        null :
            <div className={b()}>
                Стараюсь загруз
                    <span className={b('text-chunk', { animated: true })}>
                        и
                    </span>
                ться...
            </div>
    }
}
