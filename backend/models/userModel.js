import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required"],
      unique: true,
      trim: true
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      trim: true,
      lowercase: true
    },
    password: {
      type: String,
      required: [true, "Password is required"]
    },
    bio: {
      type: String,
      default: "This user has not set a bio yet.",
    },
    profilePic: {
      type: String,
      default: "https://placeholder", // default url
    },
    joinedCommunities: [
      {
        type: String, // community names or id
      },
    ],
    createdPosts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post", // references Post model
      },
    ],
    savedPosts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
      },
    ],
  },
  {
    timestamps: true, // adds created at and updated at field
  }
);

const User = mongoose.model("User", userSchema);

export default User;
