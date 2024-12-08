import mongoose from "mongoose";

const CommunitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  members: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // refers user model
  }],
  posts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post", // refers to post model
  }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Community = mongoose.model("Community", CommunitySchema);

export default Community;
