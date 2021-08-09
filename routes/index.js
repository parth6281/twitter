var express = require('express');
var router = express.Router();

const mongoose = require('mongoose');

const Post = mongoose.model('Post');

/* GET home page. */
router.get('/posts', function (req, res, next) {
  Post.find()
    .exec((err, postdata) => {
      console.log(postdata);
      if (err) {
        res
          .status(404)
          .json(err);
        return;
      }
      res
        .status(200)
        .json(postdata);
    });
});

router.get('/posts/:id', (req, res) => {
  const id = req.params.id;

  if (id) {
    Post.findById(id)
      .exec((err, post) => {
        if (err) {
          res
            .status(404)
            .json(err);
          return;
        }
        if (post) {
          res
            .status(200)
            .json(post);
        } else {
          res
            .status(404)
            .json({ message: "Not Found." });
        }
      })
  } else {
    res
      .status(404)
      .json({ message: "No bookid" });
  }
})
module.exports = router;
