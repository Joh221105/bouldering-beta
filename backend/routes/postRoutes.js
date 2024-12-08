import express from "express";
import {
  getAllPosts,
  getPostById,
  deletePost,
  searchPosts,
  createPost
} from "../controllers/postController.js";

const app = express.Router();

// get all Posts
app.get("/", getAllPosts);

// get Posts by search query
app.get("/search", searchPosts);

// create post
app.post("/", createPost)
// get Post by ID
app.get("/:postId", getPostById);

// delete Post by ID
app.delete("/:postId", deletePost);

export default app;