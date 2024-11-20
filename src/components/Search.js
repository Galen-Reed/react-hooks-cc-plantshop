import React, { useState } from "react";

function Search( {setSearch }) {

  const [input, setInput] = useState('');

  function handleInputChange(e) {
    setInput(e.target.value);
    setSearch(e.target.value);
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={input}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default Search;
