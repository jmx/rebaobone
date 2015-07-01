import tree from "../app/tree";

window.tree = tree;
let actions = {
	selectSuburb(suburbId) {
		tree.set("selectedSuburbId", suburbId);
	},
	setSuburbs(suburbs) {
		tree.set("suburbs", suburbs);
	}
}

export default actions;