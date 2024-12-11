import React, { useState } from "react";

// TODO:
// Replace hardset Community selection option
// Implement submit function
// Add tag selection option specific to selected community

const handleCreate = (e, postDetails) => {
  e.preventDefault();
  // Implement function to handle form submission
  console.log("Post submitted:", postDetails);
};

const CreatePostPage = () => {
  const [postDetails, setPostDetails] = useState({
    community: "",
    title: "",
    body: "",
    tags: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPostDetails({ ...postDetails, [name]: value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPostDetails({ ...postDetails, image: file });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        onSubmit={(e) => handleCreate(e, postDetails)}
        className="w-full max-w-2xl p-6 border rounded-lg"
      >
        <h1 className="text-2xl font-bold mb-6">Create Post</h1>

        {/* Community Selection */}
        <div className="mb-4">
          <label className="block mb-2">Select Community</label>
          <select
            name="community"
            value={postDetails.community}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          >
            <option value="" disabled>
              Select a community
            </option>
            <option value="community1">Community 1</option>
            <option value="community2">Community 2</option>
          </select>
        </div>

        {/* Title */}
        <div className="mb-4">
          <label className="block mb-2">Title</label>
          <input
            type="text"
            name="title"
            value={postDetails.title}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            placeholder="Enter the post title"
          />
        </div>

        {/* Body */}
        <div className="mb-4">
          <label className="block mb-2">Body</label>
          <textarea
            name="body"
            value={postDetails.body}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            placeholder="Write your post here"
            rows="5"
          ></textarea>
        </div>

        {/* Tags */}
        <div className="mb-4">
          <label className="block mb-2">Tags</label>
          <input
            type="text"
            name="tags"
            value={postDetails.tags}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            placeholder="Add tags (optional)"
          />
        </div>

        {/* Image Upload */}
        <div className="mb-4">
          <label className="block mb-2">Add Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="w-full px-3 py-2 border rounded"
          />
          {postDetails.image && (
            <div className="mt-2 text-sm text-gray-600">
              Selected file: {postDetails.image.name}
            </div>
          )}
        </div>

        {/* Submit Button */}
        <button className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition">
          Submit Post
        </button>
      </form>
    </div>
  );
};

export default CreatePostPage;
