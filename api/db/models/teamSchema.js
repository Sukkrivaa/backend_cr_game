const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TeamSchema = new Schema({
    name: String,
    type: String
})

const Team = mongoose.model("team", TeamSchema)

module.exports = Team