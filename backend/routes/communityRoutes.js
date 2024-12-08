import express from "express";
import {
  getCommunities,
  getCommunityById,
  deleteCommunityById,
  addPostToCommunity,
  addMemberToCommunity,
  removeMemberFromCommunity,
  removePostFromCommunity, 
} from "../controllers/communityController.js";

const app = express.Router();

// gets all communities
app.get("/", getCommunities);

// gets community by Id
app.get("/:communityId", getCommunityById);

// deletes community by Id
app.delete("/:communityId", deleteCommunityById);

// adds a post to a community
app.post("/:communityId/posts", addPostToCommunity);

// add a member to a community
app.post("/:communityId/members", addMemberToCommunity);

// removes a member from a community
app.delete("/:communityId/members", removeMemberFromCommunity);

// removes a post from a community
app.delete("/:communityId/posts/:postId", removePostFromCommunity); 

export default app;
