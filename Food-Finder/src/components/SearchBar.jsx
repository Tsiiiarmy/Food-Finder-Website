import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center mb-6">
      <input
        type="text"
        placeholder="Search for meals or ingredients..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="px-4 py-2 border border-gray-300 rounded-l-md w-64 focus:outline-none"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-green-500 text-white rounded-r-md hover:bg-green-600"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
