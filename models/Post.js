const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  lc_id: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Posts", PostSchema);
