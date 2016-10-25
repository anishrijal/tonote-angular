var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var noteSchema = new Schema({
    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    }

});

var Note = mongoose.model("Note", noteSchema);

module.exports = Note;
