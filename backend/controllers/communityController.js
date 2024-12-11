import Community from "../models/communityModel.js";
import Post from "../models/postModel.js";

// retrieves all communities
export const getCommunities = async (req, res) => {
  try {
    const communities = await Community.find();
    res.json({ communities });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// gets community by id
export const getCommunityById = async (req, res) => {
  const { communityId } = req.params;

  try {
    const community = await Community.findById(communityId).populate('members').populate('posts');

    if (!community) {
      return res.status(404).json({ message: "Community not found" });
    }

    res.json({ community });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// deletes community by id
export const deleteCommunityById = async (req, res) => {
  const { communityId } = req.params;

  try {
    const community = await Community.findByIdAndDelete(communityId);

    if (!community) {
      return res.status(404).json({ message: "Community not found" });
    }

    // deletes posts associated with deleted community
    await Post.deleteMany({ community: communityId });

    res.status(200).json({ message: "Community and associated posts deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// add a post to a community
export const addPostToCommunity = async (req, res) => {
  const { communityId } = req.params;
  const { title, content, author } = req.body;

  try {
    const community = await Community.findById(communityId);

    if (!community) {
      return res.status(404).json({ message: "Community not found" });
    }

    const post = new Post({
      title,
      content,
      author,
      community: communityId, // reference to the community
      createdAt: new Date(),
    });

    await post.save();

    // adds created post to community post array
    community.posts.push(post._id);
    await community.save();

    res.status(201).json({ message: "Post created and added to community", post });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// removes and deletes post from community post array
export const removePostFromCommunity = async (req, res) => {
  const { communityId, postId } = req.params;

  try {
    // Check if the community exists
    const community = await Community.findById(communityId);
    if (!community) {
      return res.status(404).json({ message: "Community not found" });
    }

    // Check if the post exists
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    // Remove the post reference from the community's posts array
    community.posts = community.posts.filter((postId) => postId.toString() !== postId);
    await community.save();

    // Delete the post from the Post collection
    await post.remove();

    res.status(200).json({ message: "Post removed from community and deleted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Add a member to a community
export const addMemberToCommunity = async (req, res) => {
  const { communityId } = req.params;
  const { userId } = req.body;

  try {
    const community = await Community.findById(communityId);

    if (!community) {
      return res.status(404).json({ message: "Community not found" });
    }

    // Check if the user is already a member
    if (community.members.includes(userId)) {
      return res.status(400).json({ message: "User is already a member" });
    }

    // Add the user to the community's members array
    community.members.push(userId);
    await community.save();

    res.status(200).json({ message: "User added to community", community });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// remove a member from a community
export const removeMemberFromCommunity = async (req, res) => {
  const { communityId } = req.params;
  const { userId } = req.body;

  try {
    const community = await Community.findById(communityId);

    if (!community) {
      return res.status(404).json({ message: "Community not found" });
    }

    // checks if the user is a member
    if (!community.members.includes(userId)) {
      return res.status(400).json({ message: "User is not a member" });
    }

    // removes the user from the community's members array
    community.members = community.members.filter((memberId) => memberId.toString() !== userId);
    await community.save();

    res.status(200).json({ message: "User removed from community", community });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};
