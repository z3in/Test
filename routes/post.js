const express = require("express");
const Post = require("../models/Post");
const router = express.Router();

// router.use("/profile", () => {
//   //run function when route is requested.
// });

router.get("/profile", async (req, res) => {
  //get post delete patch requests
  try {
    const post = await Post.find();
    res.json(post);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get("/profile/:postId", async (req, res) => {
  //get post delete patch requests
  try {
    const post = await Post.findById(req.params.postId);
    res.json(post);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/profile", async (req, res) => {
  /*  console.log(req.fields); */
  const post = new Post({
    lc_id: req.fields.lc_id,
    username: req.fields.username,
  });
  try {
    const savePost = await post.save();
    res.json(savePost);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
