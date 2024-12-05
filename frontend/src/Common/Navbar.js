import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='text-red-500 bg-slate-200 flex justify-around p-3 text-2xl'>
      <div className='border border-t-blue-500'></div>
      <Link className="mr-5" to="/signup">Sign Up</Link>
      <Link className="mr-5" to="/login">Login</Link>
      <Link className="mr-5" to="/">Home</Link>
      <Link className="mr-5" to="/community">Community</Link>
      <Link className="mr-5" to="/create">Create Post</Link>
      <Link className="mr-5" to="/edit-post">Edit Post</Link>
      <Link className="mr-5" to="/edit-profile">Edit Profile</Link>
      <Link className="mr-5" to="/explore">Explore</Link>
      <Link className="mr-5" to="/post">Post Details</Link>
      <Link className="mr-5" to="/search">Search</Link>
      <Link className="mr-5" to="/profile">User Profile</Link>
    </div>
  )
}

export default Navbar