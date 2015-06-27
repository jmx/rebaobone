var gulp = require("gulp");
var globals = require("salespreso-gulp/globals");

var spGulp = require("salespreso-gulp")(gulp, {
	"serveType": globals.SERVETYPE.JSPM,
	"port": 6533
});