import React from "react";
import Application from "./App";

import actions from "../suburbs/actions";

setTimeout( function () {
	actions.selectSuburb(1);
}, 2000);

React.render(<Application />, document.getElementById("demo"));