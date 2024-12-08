import express from "express";
import { getCommunities, getCommunityById, deleteCommunityById } from "../controllers/communityController.js";

const app = express.Router();

// gets all communities
app.get("/", getCommunities);

// get community by Id
app.get("/:communityId", getCommunityById);

app.delete("/:communityId", deleteCommunityById);

export default app;
