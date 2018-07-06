const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

//schema always included in model file


const movieSchema = new Schema({
  title: String,
  director: String,
  stars: [String],
  image: String,
  description: String,
  showtimes: [String]
}, {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});

const MovieThings = mongoose.model("MovieThings", movieSchema);

module.exports = MovieThings;

