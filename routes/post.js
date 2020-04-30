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
    res.json({ response: 1, message: "success", data: [{ post }] });
  } catch (err) {
    res.json({ message: err });
  }
});

router.get("/profile/:postId", async (req, res) => {
  //get post delete patch requests
  try {
    const post = await Post.findById(req.params.postId);
    res.json({ response: 1, message: "success", data: [{ post }] });
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/profile", async (req, res) => {
  /*  console.log(req.fields); */
  const post = new Post({
    LC_ID: req.fields.lc_id,
    LC_USER: req.fields.username,
    LAST_NAME: req.fields.last_name,
    FIRST_NAME: req.fields.first_name,
    MIDDLE_NAME: req.fields.middle_name,
    SUFFIX: req.fields.first_name,
  });
  try {
    const savePost = await post.save();
    res.json(savePost);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
