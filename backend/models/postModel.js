import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  description: {
    type: String,
    required: [true, "Description is required"],
  },
  img: {
    type: String,
    default: "",
  },
  tags: {
    type: [String],
    required: [true, "At least one tag is required"],
  },
  author: {
    type: mongoose.Schema.Types.ObjectId, // user ids 
    ref: "User",
    required: true,
  },
  community: {
    type: String, // community name or id
    required: [true, "Community is required"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Post = mongoose.model("Post", PostSchema);

export default Post;
