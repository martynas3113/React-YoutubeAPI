const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const searchSchema = new Schema({
    search: {
        type: String,
        required: true,
        unique: false,
        trim: true,
        minlength: 1
    },
    date: { type: String, default: Date } 
});

const Search = mongoose.model("Search", searchSchema);

module.exports = Search;