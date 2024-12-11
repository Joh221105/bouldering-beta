import React from "react";
import posts from "../../data/postData";
import PostCard from "../../Common/PostCards";

const HomePage = () => {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div className="w-1/4 p-4 border-r bg-gray-100">
        <h2 className="text-xl font-bold mb-4 pb-5 uppercase border-b-2">Communities</h2>
        <ul className="space-y-4">
          <li className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
            <a href="#1" className="text-blue-600 font-semibold text-lg">
              Beginner Climbs
            </a>
          </li>
          <li className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
            <a href="#2" className="text-blue-600 font-semibold text-lg">
              Advanced Beta
            </a>
          </li>
          <li className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
            <a href="#3" className="text-blue-600 font-semibold text-lg">
              Outdoor Adventures
            </a>
          </li>
        </ul>
      </div>

      {/* Feed */}
      <div className="w-3/4 p-4">
        <h1 className="text-2xl font-bold mb-6 uppercase">Home Feed</h1>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
