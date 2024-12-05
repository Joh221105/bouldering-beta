import React, { useState, useEffect } from "react";

// TODO 
// add ability to change image if needed
// implement handle submit

// Default post data to populate the form
const defaultPost = {
  id: 1,
  title: "How to boulder like a pro",
  body: "Bouldering tips and techniques for beginners to improve their climbing skills.",
  tags: "bouldering, climbing, beginners, tips",
};

const EditPostPage = () => {
  const [postData, setPostData] = useState({
    title: defaultPost.title,
    body: defaultPost.body,
    tags: defaultPost.tags,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPostData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // send and update post db
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <form onSubmit={handleSubmit} className="w-full max-w-lg p-6 border rounded-lg">
        <h1 className="text-2xl font-bold mb-6">Edit Post</h1>

        {/* Title */}
        <div className="mb-4">
          <label className="block mb-2">Title</label>
          <input
            type="text"
            name="title"
            value={postData.title}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded"
            placeholder="Enter the post title"
          />
        </div>

        {/* Body */}
        <div className="mb-4">
          <label className="block mb-2">Body</label>
          <textarea
            name="body"
            value={postData.body}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded"
            placeholder="Write your post content"
            rows="5"
          ></textarea>
        </div>

        {/* Tags */}
        <div className="mb-4">
          <label className="block mb-2">Tags (Optional)</label>
          <input
            type="text"
            name="tags"
            value={postData.tags}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded"
            placeholder="Add tags for the post"
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditPostPage;
