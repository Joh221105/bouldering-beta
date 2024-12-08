import express from "express";
import {
  getAllPosts,
  getPostById,
  deletePost,
  searchPosts,
  filterPostsByTags,
} from "../controllers/PostController.js";

const app = express.Router();

// get all Posts
app.get("/", getAllPosts);

// get Posts by search query
app.get("/search", searchPosts);

// get Posts by tag
app.get("/filter", filterPostsByTags);

// get Post by ID
app.get("/:postId", getPostById);

// delete Post by ID
app.delete("/:postId", deletePost);

export default app;