const { Schema, model } = require("mongoose");

const postSchema = new Schema({
  title: String,
  description: String,
  creator: {
    type: Schema.Types.ObjectId,
    ref: "Student"
  }
});

const PostModel = model("Post", postSchema);

module.exports = PostModel;