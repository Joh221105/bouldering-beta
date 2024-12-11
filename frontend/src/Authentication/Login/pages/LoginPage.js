import React, { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { AuthContext} from "../../../context/AuthContext"

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    
    const email = e.target.email.value;
    const password = e.target.password.value;
    
    try {
      const response = await fetch("http://localhost:5001/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({email, password}),
      });

      const data = await response.json();
      if (response.ok){
        login(data.token, email);
        navigate('/');
      } else{
        console.log(data.message)
      }
    } catch(error) {
      console.log("Error: ", error)
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form className="w-full max-w-md p-4 border rounded-lg" onSubmit={handleLogin}>
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <div className="mb-4">
          <label className="block mb-2">Email</label>
          <input
            type="email"
            className="w-full px-3 py-2 border rounded"
            name = "email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Password</label>
          <input
            type="password"
            className="w-full px-3 py-2 border rounded"
            name = "password"
            placeholder="Enter your password"
            required
          />
        </div>
        <button className="w-full bg-blue-500 text-white py-2 rounded">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
