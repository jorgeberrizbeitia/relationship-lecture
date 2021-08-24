const router = require("express").Router();
const StudentModel = require('../models/Student.model')
const PostModel = require('../models/Post.model')
// create all our routes

// GET '/posts' => this will list all our posts
router.get('/', (req, res, next) => {
  PostModel.find()
  .populate('creator')
  .then( (allPosts) => res.render('posts/list.hbs', {allPosts}))
  .catch( (err) => console.log(err));
  
})

// GET '/posts/add' => this will render the add post form
router.get('/add', (req, res, next) => {
  StudentModel.find()
  .then( (allStudents) => res.render('posts/add-form.hbs', {allStudents}))
  .catch( (err) => console.log(err));
})

router.post('/add', (req, res, next) => {
  console.log(req.body)
  const {title, description, creator} = req.body
  PostModel.create({title, description, creator})
  .then( (data) => res.redirect('/posts'))
  .catch( (err) => console.log(err));
})

module.exports = router;