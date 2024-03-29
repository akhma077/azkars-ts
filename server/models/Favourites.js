const { Schema, model } = require("mongoose");

const shema = new Schema({
  id: { type: String },
  userId: { type: String },
  title: { type: String },
  arabicLanguage: { type: String },
  meaning: { type: String },
  type: { type: String },
  rusLanguage: { type: String },
  mp3: { type: String },
});

module.exports = model("Favourites", shema);
