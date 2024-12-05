import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 

const Header = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query) {
      navigate(`/search?query=${query}`); 
    }
  };

  return (
    <header className="flex justify-between items-center p-4 border-2">

      {/* Search Bar */}
      <form onSubmit={handleSearch} className="flex items-center">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="px-4 py-2 rounded-l-md border"
          placeholder="Search..."
        />
        <button type="submit" className="bg-blue-500 px-4 py-2 rounded-r-md text-white">
          Search
        </button>
      </form>
    </header>
  );
};

export default Header;
