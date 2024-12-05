import React from "react";
import Comment from "../components/Comments";

const PostDetailsPage = () => {
  const post = {
    title: "How to Boulder Like a Pro",
    author: "John Doe",
    body: "Bouldering is a great way to challenge yourself physically and mentally. In this post, we will go over techniques that can help you improve your bouldering skills. Make sure to start with easier routes and build up to harder ones...",
    upvote: 5,
    downvote: 0,
    timestamp: "December 5, 2024",
  };

  const comments = [
    {
      author: "Jane Smith",
      content:
        "Great tips! I’ve been working on my footwork, and it’s definitely helping.",
      timestamp: "December 5, 2024 - 2:30 PM",
    },
    {
      author: "Mark Lee",
      content:
        "I’ll try this technique on my next bouldering session. Thanks for sharing!",
      timestamp: "December 5, 2024 - 3:15 PM",
    },
  ];

  return (
    <div className="p-6">
      <div className="max-w-3xl mx-auto">
        {/* Post Content */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <h2 className="text-3xl font-bold mb-4">{post.title}</h2>
          <div className="text-gray-600 text-sm mb-4">
            By {post.author} | {post.timestamp}
          </div>
          <p>{post.body}</p>
          <div className="mt-5">
            <span className="mr-5">{post.upvote} Upvotes</span>
            <span>{post.downvote} Downvotes</span>
          </div>
        </div>

        {/* Comments Section */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-2xl font-semibold mb-4">Comments</h3>
          {comments.length > 0 ? (
            comments.map((comment, index) => (
              <Comment
                key={index}
                author={comment.author}
                content={comment.content}
                timestamp={comment.timestamp}
              />
            ))
          ) : (
            <p>No comments yet. Be the first to comment!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostDetailsPage;
