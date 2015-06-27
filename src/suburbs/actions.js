import tree from "../app/tree";

window.tree = tree;
let actions = {
	selectSuburb(suburbId) {
		tree.set("selectedSuburbId", suburbId);
	}
}

export default actions;