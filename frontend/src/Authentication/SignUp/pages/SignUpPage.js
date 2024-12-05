import React, { useState } from "react";

const SignupPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    // connect with backend
    console.log("Sign up successful:", { username, email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form className="w-full max-w-md p-4 border rounded-lg" onSubmit={handleSignup}>
        <h1 className="text-2xl font-bold mb-4">Signup</h1>
        <div className="mb-4">
          <label className="block mb-2">Username</label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Email</label>
          <input
            type="email"
            className="w-full px-3 py-2 border rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Password</label>
          <input
            type="password"
            className="w-full px-3 py-2 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
        <button className="w-full bg-green-500 text-white py-2 rounded">Signup</button>
      </form>
    </div>
  );
};

export default SignupPage;
