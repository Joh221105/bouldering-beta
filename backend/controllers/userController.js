import User from "../models/user.js";

// retrieves all existing users from the database
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json({ users });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Get user profile info by userId
export const getUserProfile = async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Get user info by email
export const getUserByEmail = async (req, res) => {
    try {
      const email = req.params.email;
      const user = await User.findOne({ email: email });
  
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
  
      res.json({ user });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server Error" });
    }
  };

// Delete user account
export const deleteUserAccount = async (req, res) => {
  try {
    const userId = req.params.userId;
    const deletedUser = await User.findByIdAndDelete(userId);

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ message: "User deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// adds created post to its author's created posts array
export const addPostToUser = async (req, res) => {
  const { userId } = req.params;
  const { postId } = req.body;

  try {
    const user = await User.findById(userId);
    user.createdPosts.push(postId);
    await user.save();
    res.status(200).json({ message: "Post added to user profile", user });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// adds post to saved posts array
export const addPostToSaved = async (req, res) => {
  const { userId } = req.params;
  const { postId } = req.body;

  try {
    const user = await User.findById(userId);
    user.savedPosts.push(postId);
    await user.save();
    res.status(200).json({ message: "Post saved", user });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// remove post from saved posts
export const removePostFromSaved = async (req, res) => {
  const { userId } = req.params;
  const { postId } = req.body;

  try {
    const user = await User.findById(userId);

    // check if the user has saved the post
    if (!user.savedPosts.includes(postId)) {
      return res.status(400).json({ message: "Post not found in saved posts." });
    }

    // remove postId from the saved array
    user.savedPosts = user.savedPosts.filter(id => id.toString() !== postId);
    await user.save();
    res.status(200).json({ message: "Post removed", user });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

