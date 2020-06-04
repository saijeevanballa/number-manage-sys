const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    number: { type: String, Max: 10, Min: 10, unique: true },
    name: { type: String, default: "Anonymous", uppercase: true },
    gender: { type: String, default: "N/A" },
    likes: { type: Number, default: 0 },
    disLikes: { type: Number, default: 0 },
    views: { type: Number, default: 0 },
    is_active: { type: Boolean, default: true }
  },
  { timestamps: true }
);

schema.index({ number: 1 });
const numSchema = mongoose.model("numbers", schema);
module.exports.numSchema = numSchema;
