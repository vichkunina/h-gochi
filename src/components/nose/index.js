import React, { Component, Fragment } from 'react';
import './index.css';
class Nose extends Component {
	render() {
        let { side } = this.props
		return (
            <Fragment>
			    <img className="nose" src="/static/nose.svg"></img>
                <img className="right-nostril nostril" src="/static/eye.svg"></img>
                <img className="left-nostril nostril" src="/static/eye.svg"></img>
            </Fragment>
		);
	}
}

export default Nose;
