import React from "react";
import posts from "../../data/post";

const HomePage = () => {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div className="w-1/4 p-4 border-r">
        <h2 className="text-xl font-bold mb-4 pb-5 uppercase border-b-2">Communities</h2>
        <ul>
          <li><a href="#" className="text-blue-600">Beginner Climbs</a></li>
          <li><a href="#" className="text-blue-600">Advanced Beta</a></li>
          <li><a href="#" className="text-blue-600">Outdoor Adventures</a></li>
        </ul>
      </div>

      {/* Feed */}
      <div className="w-3/4 p-4">
        <h1 className="text-2xl font-bold mb-6 uppercase">Home Feed</h1>
        {posts.map((post) => (
          <div key={post.id} className="mb-6 p-4 border rounded-lg">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="my-1 text-blue-500">{post.community}</p>
            <p className="text-gray-600 text-sm">Posted by {post.author} on {post.date}</p>
            <p className="my-4">{post.body}</p>
            <div className="flex justify-between items-center">
              <span>{post.upvotes} Upvotes</span>
              <span>{post.comments} Comments</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
