import express from "express";
import bodyParser from "body-parser";
import fs from "fs";

const ITEMS_PER_PAGE = 10;

fs.readFile("suburbs.json", function (err, data) {
	if (err) throw err;
	let suburbs = JSON.parse(data);

	let app = express();

	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({
		extended: true
	}));

	app.use(function(req, res, next) {
		res.header("Access-Control-Allow-Origin", "*");
		res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
		res.header("Content-Type", "application/json");
		next();
	});

	app.get("/suburbs/**", function (req, res) {
		let page = (req.query && req.query.page) ? req.query.page : 1;
		let startAt = (ITEMS_PER_PAGE * page) - ITEMS_PER_PAGE;
		let numberOfPages = Math.ceil(suburbs.length / ITEMS_PER_PAGE);
		let resp = {
			results: [],
			pages: numberOfPages,
			previous: (page > 1) ? page - 1 : null,
			next: (page < numberOfPages) ? ++page : null
		};

		for (let i=startAt; i<startAt+ITEMS_PER_PAGE; i++) {
			if (i < suburbs.length - 1) {
				resp.results.push(suburbs[i])
			}
		};
		
		res.send(JSON.stringify(resp));
	});

	app.listen(3000);

});


