import React, { useState } from "react";
import defaultPic from "../../images/defaultpfp.jpg"

const EditProfilePage = () => {
  // Dummy state for user data and profile image
  const [userData, setUserData] = useState({
    username: "JohnDoe",
    email: "john.doe@example.com",
    bio: "A passionate climber and outdoor enthusiast.",
    profilePic: null, 
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUserData((prevData) => ({
        ...prevData,
        profilePic: URL.createObjectURL(file),
      }));
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // implement call to backend
    console.log(userData);
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <form onSubmit={handleSubmit} className="w-full max-w-lg p-6 border rounded-lg">
        <h1 className="text-2xl font-bold mb-6">Edit Profile</h1>

        {/* Profile Image */}
        <div className="mb-4 flex justify-center">
          <img
            src={userData.profilePic || defaultPic} 
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover border-4 border-gray-300 mb-4"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Upload Profile Picture</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>

        {/* Username */}
        <div className="mb-4">
          <label className="block mb-2">Username</label>
          <input
            type="text"
            name="username"
            value={userData.username}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded"
            placeholder="Enter your username"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded"
            placeholder="Enter your email"
          />
        </div>

        {/* Bio */}
        <div className="mb-4">
          <label className="block mb-2">Bio</label>
          <textarea
            name="bio"
            value={userData.bio}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded"
            placeholder="Tell us about yourself"
            rows="4"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditProfilePage;
