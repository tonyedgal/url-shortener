const mongoose = require("mongoose");
const { Schema } = mongoose;

let urlSchema = new Schema({
  original: { type: String, required: true },
  short: Number,
});

let Url = mongoose.model("Url", urlSchema);

module.exports = Url;
