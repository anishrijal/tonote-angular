var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var noteSchema = new Schema({
    title: {
        type: String
    },

    description: {
        type: String
    }

});

var Note = mongoose.model("Note", noteSchema);

module.exports = Note;
