import express from "express";
import {
  getUserProfile,
  deleteUserAccount,
  getAllUsers,
  getUserByEmail,
  addPostToUser,
  addPostToSaved,
  removePostFromSaved,
} from "../controllers/userController.js";

const app = express.Router();

// get all users
app.get("/", getAllUsers);

// get user profile by id
app.get("/:userId", getUserProfile);

// get user profile by email
app.get("/email/:email", getUserByEmail);

// delete user profile by id
app.delete("/:userId", deleteUserAccount);

// removes saved recipes from saved array
app.delete("/:userId/removePost", removePostFromSaved);

// adds created recipe to user's created recipe array
app.post("/:userId/addPost", addPostToUser);

// adds post to user's saved array
app.post("/:userId/savePost", addPostToSaved);

export default app;