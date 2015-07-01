import React from "react";
import {branch} from 'baobab-react/higher-order';

let SuburbList = React.createClass({
	render() {
		if (this.props.suburb) {
			return <div>{this.props.suburb.name}</div>
		} else {
			return <div>Nothing yet</div>;
		}
	}
});

export default branch(Suburb, {
	facets: {
		suburb: "selectedSuburb"
	}
});