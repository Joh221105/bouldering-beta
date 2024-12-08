import React from "react";
import posts from "../../data/postData";

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
          <div key={post.id} className="mb-6 p-4 border rounded-lg shadow">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="my-1 text-blue-500">{post.community}</p>
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

export default HomePage;
