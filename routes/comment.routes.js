const router = require("express").Router();
const CommentModel = require("../models/Comment.model");

router.post('/add', (req, res, next) => {
  console.log(req.body)
  const { comment, inPost, creator } = req.body
  CommentModel.create({ comment, inPost, creator })
  .then( (data) => res.redirect(`/posts/${inPost}/details`))
  .catch( (err) => console.log(err));
})

module.exports = router;