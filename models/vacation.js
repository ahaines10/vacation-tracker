const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const commentSchema = new Schema(
  {
    content: {
      type: String,
    },
    // rating: {
    //   type: Number,
    //   min: 1,
    //   max: 5,
    //   default: 5,
    // },
    user: { type: Schema.Types.ObjectId, ref: "User" },
    userName: String,
    userAvatar: String,
  },
  {
    // Automatic createdAt & updatedAt properties
    timestamps: true,
  }
);

const vacationSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  activities: [String],
  pricing: {
    type: Number,
    default: 0,
  },
  user: { type: Schema.Types.ObjectId, ref: "User" },
  comments: [commentSchema],
});

module.exports = mongoose.model("Vacation", vacationSchema);
