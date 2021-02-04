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
}, {
    timestamps:true
});

const Search = mongoose.model("Search", searchSchema);

module.exports = Search;