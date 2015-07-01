import React from "react";
import Application from "./App";
import SuburbCollection from "suburbs/SuburbCollection";
import $ from "jquery";
import Backbone from "backbone";
import _ from "lodash";
import suburbActions from "suburbs/actions";



var suburbs = new SuburbCollection();
suburbs.fetch({url: "http://localhost:3000/suburbs/"});

suburbs.on("sync", function (data) {
	var suburbList = [];
	_.each(data.models, function (suburb) {
		suburbList.push(suburb.toJSON());
	});
	suburbActions.setSuburbs(suburbList);
});



React.render(<Application />, document.getElementById("demo"));