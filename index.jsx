// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // install react-router-dom using npm

const Navbar = ({ user }) => {
  return (
    <nav className="bg-black p-4 text-white flex justify-between">
      <div>
        <h1 className="text-3xl font-bold">YouTube Video Summary Generator</h1>
      </div>
      <div>
        <a href="#" className="text-white hover:underline mx-4">Welcome {user.username}</a>
        <Link to="/blog-list" className="text-white hover:underline mx-4">Saved Blog Posts</Link>
        <a href="#" className="text-white hover:underline">Logout</a>
      </div>
    </nav>
  );
};

export default Navbar;
