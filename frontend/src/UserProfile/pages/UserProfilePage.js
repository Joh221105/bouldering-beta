import React from "react";
import user from "../../data/userData";
import defaultPic from "../../images/defaultpfp.jpg";

const UserProfile = () => {
  return (
    <div className="p-6 bg-gray-100 h-screen">
      <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col md:flex-row h-full">
        {/* Left Column */}
        <div className="w-full md:w-1/3 border-r-2 border-gray-200 pr-6 mb-6 md:mb-0">
          {/* Profile Section */}
          <div className="flex flex-col items-center text-center mb-6">
            {/* Profile Picture */}
            <img
              src={user.profilePic ? user.profilePic : defaultPic} // if no profile pic, use default pic
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover border-4 border-gray-300 mb-4"
            />

            <h2 className="text-3xl font-semibold">{user.username}</h2>
            <p className="text-sm text-gray-500">Joined: {user.joinDate}</p>
            <p className="text-sm text-gray-500">
              Posts: {user.postsCount} | Comments: {user.commentsCount}
            </p>
          </div>

          {/* Bio Section */}
          <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-2">Bio</h3>
            <p>{user.bio}</p>
          </div>

          {/* Joined Communities Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-2">Joined Communities</h3>
            <ul>
              {user.joinedCommunities.map((community, index) => (
                <li key={index} className="text-blue-600 hover:underline">
                  {community}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full md:w-2/3 pl-6">
          <h3 className="text-2xl font-semibold mb-4">Created Posts</h3>
          {user.createdPosts.length > 0 ? (
            user.createdPosts.map((post) => (
              <div
                key={post.id}
                className="mb-4 border-2 rounded-lg p-5 hover:bg-slate-50 hover:cursor-pointer hover:scale-105 transition-transform"
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
