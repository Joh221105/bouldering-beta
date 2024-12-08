import React from "react";
import communityPosts from "../../data/postData";
import community from "../../data/communityData";
import { useState } from "react";

const CommunityPage = () => {
  const [isMember, setIsMember] = useState(false);

  const handleJoinClick = () => {
    setIsMember(!isMember);
  };

  return (
    <div className="min-h-screen flex">
      {/* Side Bar */}
      <div className="w-1/4 p-4 border-r bg-gray-100">
        <h1 className="mb-4 text-2xl font-bold">{community.name}</h1>
        <p>{community.description}</p>
        <p className="mt-4">
          <strong>Members:</strong> {community.members}
        </p>

        {/* Join Button */}
        <button
          onClick={handleJoinClick}
          className={`mt-4 w-full px-4 py-2 rounded ${
            isMember ? "bg-gray-400" : "bg-green-500"
          } text-white`}
        >
          {isMember ? "Joined" : "Join Community"}
        </button>
      </div>

      {/* Posts Feed */}
      <div className="w-3/4 p-4">
        {communityPosts.map((post) => (
          <div key={post.id} className="mb-6 p-4 border rounded-lg">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-gray-600 text-sm">
              Posted by {post.author} on {post.date}
            </p>
            <p className="my-4">{post.body}</p>
            <div className="flex justify-between items-center">
              <div>
                <span className="mr-5">{post.upvotes} Upvotes</span>
                <span>{post.downvotes} Downvotes</span>
              </div>
              <span>{post.comments} Comments</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommunityPage;
