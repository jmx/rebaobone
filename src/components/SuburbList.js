import React from "react";
import {branch} from 'baobab-react/higher-order';

let SuburbList = React.createClass({
	render() {
		if (this.props.suburbs) {
			var suburbNodes = this.props.suburbs.map(function (suburb) {
				var key = suburb.name + suburb.postcode;
				return <div key={key}>{suburb.name}</div>
			});

			return (
				<div>
					<h1>Suburbs</h1>
					{suburbNodes}
				</div>
			);
		} else {
			return <div>No suburbs loaded</div>
		}
	}
});

export default branch(SuburbList, {
	facets: {
		suburbs: "suburbs"
	}
});