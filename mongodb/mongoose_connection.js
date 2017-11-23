var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var url = "mongodb://localhost:27500/politics";
mongoose.connect(url, {
    useMongoClient: true
});

var doc = {
    number: Number,
    president: String,
    birth_year: Number,
    death_year: Number,
    took_office: String,
    left_office: String,
    party: String
};

var document_structure = new mongoose.Schema(doc); //build a new schema with doc. presidents is collection.

var PRESIDENTSCLASS = mongoose.model('presidents', document_structure);

module.exports = PRESIDENTSCLASS;