import React from 'react';
import './index.css';
class Ear extends React.Component {
	render() {
        let { side } = this.props
		return (
			<img className={`${side}-ear pig-ear`} src={`/static/${side}-ear.svg`}></img>
		);
	}
}

export default Ear;
