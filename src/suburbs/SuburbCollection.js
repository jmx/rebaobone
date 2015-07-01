import Backbone from "backbone";
import SuburbModel from "./SuburbModel";
import tree from "../app/tree";

export default Backbone.Collection.extend({
	model: SuburbModel,
	parse: function (data) {
		return data.results;
	}
});