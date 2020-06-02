const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    number: { type: Number, Max: 10, Min: 10 },
    name: { type: String, default: "Anonymous" },
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
