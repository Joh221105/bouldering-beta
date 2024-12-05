import React from "react";

// TODO:
// Replace hardset Community selection option
// implement submit function
// add tag selection option specific to selected community
// ability to add image

const handleCreate = (e) => {
  e.preventDefault();
  //implement function
};

const CreatePostPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleCreate} className="w-full max-w-2xl p-6 border rounded-lg">
        <h1 className="text-2xl font-bold mb-6">Create Post</h1>

        {/* Community Selection */}
        <div className="mb-4">
          <label className="block mb-2">Select Community</label>
          <select className="w-full px-3 py-2 border rounded">
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
            className="w-full px-3 py-2 border rounded"
            placeholder="Enter the post title"
          />
        </div>

        {/* Body */}
        <div className="mb-4">
          <label className="block mb-2">Body</label>
          <textarea
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
            className="w-full px-3 py-2 border rounded"
            placeholder="Add tags (optional)"
          />
        </div>

        {/* Submit Button */}
        <button className="w-full bg-green-500 text-white py-2 rounded">
          Submit Post
        </button>
      </form>
    </div>
  );
};

export default CreatePostPage;
