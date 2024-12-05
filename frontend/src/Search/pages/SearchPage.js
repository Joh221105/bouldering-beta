import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import searchData from "../../data/searchData"; 
import Header from "../../Common/Header"

const SearchPage = () => {
  const [results, setResults] = useState([]);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query");

  useEffect(() => {
    if (query) {
      // Filter searchData based on the query
      const filteredResults = searchData.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filteredResults);
    }
  }, [query]);

  return (
    <div className="p-6">
      <Header />
      <h1 className="text-2xl font-bold mb-4">Search Results for "{query}"</h1>

      {results.length > 0 ? (
        <div>
          {results.map((result, index) => (
            <div key={index} className="border-b py-4">
              <h3 className="font-semibold">{result.title}</h3>
              <p>{result.category} - Tags: {result.tags}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No results found for your search.</p>
      )}
    </div>
  );
};

export default SearchPage;
