import React, { Component, Fragment } from 'react';
import './index.css';
class Eye extends Component {
	render() {
        let { side } = this.props
		return (
            <Fragment>
			    <img className={`${side}-eye pig-eye`} src="/static/eye.svg"></img>
                <img className={`${side}-pupil pig-eye`} src="/static/pupil.svg"></img>
                <img className={`${side}-highlight pig-eye`} src="/static/eye.svg"></img>
            </Fragment>
		);
	}
}

export default Eye;
