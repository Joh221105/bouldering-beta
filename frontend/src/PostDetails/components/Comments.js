import React from "react";

const Comment = ({ author, content, timestamp }) => {
  return (
    <div className="border-b py-4">
      <div className="font-semibold">{author}</div>
      <p>{content}</p>
      <p className="text-sm text-gray-500">{timestamp}</p>
    </div>
  );
};

export default Comment;
