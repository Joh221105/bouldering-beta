import React from "react";
import user from "../../data/userData";

const UserProfile = () => {
  return (
    <div className="p-6">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
        {/* Profile Section */}
        <div className="flex items-center mb-6">
          {/* Profile Picture */}
          <img
            src={user.profilePic}
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover border-4 border-gray-300 mr-6"
          />

          <div>
            <h2 className="text-3xl font-semibold">{user.username}</h2>
            <p className="text-sm text-gray-500">Joined: {user.joinDate}</p>
            <p className="text-sm text-gray-500">
              Posts: {user.postsCount} | Comments: {user.commentsCount}
            </p>
          </div>
        </div>

        {/* Bio Section */}
        <div className="mb-6">
          <h3 className="text-2xl font-semibold mb-2">Bio</h3>
          <p>{user.bio}</p>
        </div>

        {/* Joined Communities Section */}
        <div className="mb-6">
          <h3 className="text-2xl font-semibold mb-2">Joined Communities</h3>
          <ul>
            {user.joinedCommunities.map((community, index) => (
              <li key={index} className="text-blue-600">
                {community}
              </li>
            ))}
          </ul>
        </div>

        {/* Created Posts Section */}
        <div className="mb-6">
          <h3 className="text-2xl font-semibold mb-2">Created Posts</h3>
          {user.createdPosts.length > 0 ? (
            user.createdPosts.map((post) => (
              <div
                key={post.id}
                className="mb-4 border-2 rounded-lg p-5 hover:bg-slate-50 hover:cursor-pointer hover:scale-105"
              >
                <h4 className="text-xl font-bold">{post.title}</h4>
                <p className="text-sm text-gray-500">
                  Posted on: {post.timestamp}
                </p>
                <p className="mt-2">{post.content.slice(0, 100)}...</p>
              </div>
            ))
          ) : (
            <p>No posts yet. Create one to get started!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
