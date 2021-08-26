// BONUS

const { Schema, model } = require("mongoose");

const commentSchema = new Schema({
  comment: String,
  creator: {
    type: Schema.Types.ObjectId,
    ref: "Student"
  },
  inPost: {
    type: Schema.Types.ObjectId,
    ref: "Post"
  }
});

const CommentModel = model("Comment", commentSchema);

module.exports = CommentModel;


