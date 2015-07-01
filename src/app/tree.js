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

let suburbs = {
	cursors: {
		suburbs: ["suburbs"]
	},
	get: function (state) {
		return state.suburbs;
	}
};

let tree = new Baobab({
	suburbs: [
		{
			name: "Coburg",
			postcode: 3080
		},
		{
			name: "Pascoe Vale",
			postcode: 3044
		}
	],
	selectedSuburbId: "0"
}, {
	facets: {
		selectedSuburb: selectedSuburb,
		suburbs: suburbs
	}
});

export default tree;