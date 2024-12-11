import React from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const PostCards = ({ post }) => {
  const { community, title, author, date, body, upvotes, downvotes, comments } = post;

  return (
    <div className="mb-6 p-4 border rounded-lg shadow hover:shadow-lg transition-shadow">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="my-1 text-blue-500">{community}</p>
      <p className="text-gray-600 text-sm">
        Posted by {author} on {date}
      </p>
      <p className="my-4">{body}</p>
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <FaArrowUp className="text-green-500" />
            <span>{upvotes}</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaArrowDown className="text-red-500" />
            <span>{downvotes}</span>
          </div>
        </div>
        <span>{comments} Comments</span>
      </div>
    </div>
  );
};

export default PostCards;
