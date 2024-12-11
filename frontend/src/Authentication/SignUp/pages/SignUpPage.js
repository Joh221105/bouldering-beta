import React from "react";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value; 
  
    console.log({ username, email, password });
  
    try {
      const response = await fetch("http://localhost:5001/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        console.log("Sign up Successful");
        navigate("/login");
      } else {
        console.log("Sign up unsuccessful", data);
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };
  

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        className="w-full max-w-md p-4 border rounded-lg"
        onSubmit={handleSignup}
      >
        <h1 className="text-2xl font-bold mb-4">Signup</h1>
        <div className="mb-4">
          <label className="block mb-2">Username</label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded"
            name="username"
            placeholder="Enter your username"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Email</label>
          <input
            type="email"
            className="w-full px-3 py-2 border rounded"
            name="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Password</label>
          <input
            type="password"
            className="w-full px-3 py-2 border rounded"
            name="password"
            placeholder="Enter your password"
            required
          />
        </div>
        <button className="w-full bg-green-500 text-white py-2 rounded">
          Signup
        </button>
      </form>
    </div>
  );
};

export default SignupPage;
