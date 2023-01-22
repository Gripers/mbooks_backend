const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    name: String,
    preview: String,
    file: String,
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Book", bookSchema);
