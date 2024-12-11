import Post from "../models/postModel.js";
import User from "../models/userModel.js";

// get all posts
export const getAllPosts = async (req, res) => {
  try {
    // returns an array of all posts from the database
    const posts = await Post.find();
    res.json({ posts });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// create a new post in the database
export const createPost = async (req, res) => {
  const { title, description, tags, author, community } = req.body;

  try {
    const post = new Post({
      title,
      description,
      tags,
      author,
      community,
      createdAt: new Date(),
    });

    await post.save();

    res.status(201).json({ message: "Post created", post });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// get details of a specific post by id from database
export const getPostById = async (req, res) => {
  const { postId } = req.params;

  try {
    const post = await Post.findById(postId);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.json({ post });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// delete a post from the database
export const deletePost = async (req, res) => {
  try {
    const postId = req.params.postId;

    if (!postId) {
      return res.status(400).json({ message: "Post ID required" });
    }

    const deletedPost = await Post.findByIdAndDelete(postId);

    if (!deletedPost) {
      return res.status(404).json({ message: "Post not found" });
    }

    // fetch user and remove the post ID from the user's created post array
    const userId = deletedPost.author;
    const user = await User.findById(userId);
    if (user) {
      user.posts.pull(postId);
      await user.save();
    }

    res.json({ message: "Post deleted and removed from user" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// get posts by query from database
export const searchPosts = async (req, res) => {
  try {
    const query = req.query.keyword;

    if (query.toLowerCase() === "all") {
      return getAllPosts(req, res); // Call the function to fetch all posts
    }

    // searches titles with matching keyword, case insensitive, stores in posts array
    const posts = await Post.find({
      title: { $regex: query, $options: "i" },
    });

    if (posts.length === 0) {
      return res.status(404).json({ message: "No matching posts found" });
    }

    res.json({ posts });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};
