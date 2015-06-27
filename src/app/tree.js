import Baobab from "baobab";

let selectedSuburb = {
	cursors: {
		id: ["selectedSuburbId"],
		suburbs: ["suburbs"]
	},
	get: function (state) {
		return state.suburbs[state.id];
	}
}

let tree = new Baobab({
	suburbs: {
		"0": {
			name: "Coburg",
			postcode: 3080
		},
		"1": {
			name: "Pascoe Vale",
			postcode: 3044
		}
	},
	selectedSuburbId: "0"
}, {
	facets: {
		selectedSuburb: selectedSuburb
	}
});

export default tree;