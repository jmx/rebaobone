import React from "react";
import Application from "./App";
import SuburbCollection from "suburbs/SuburbCollection";
import $ from "jquery";
import Backbone from "backbone";
import _ from "lodash";
import suburbActions from "suburbs/actions";



var suburbs = new SuburbCollection();
var page = 1;

function doFetch() {
	suburbs.fetch({
		url: "http://localhost:3000/suburbs/",
		data: {
			page: page
		}
	});

	suburbs.on("sync", function (data) {
		var suburbList = [];
		_.each(data.models, function (suburb) {
			suburbList.push(suburb.toJSON());
		});
		suburbActions.setSuburbs(suburbList);
	});
}

setInterval( function () {
	page++;
	doFetch()
}, 1500);

React.render(<Application />, document.getElementById("demo"));