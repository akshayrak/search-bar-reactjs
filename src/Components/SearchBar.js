import React, { useState } from 'react';

function SearchBar({ placeholder, data }) {
  const [query, setQuery] = useState('');
  return (
    <div className="search">
      <div className="searchInputs">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          placeholder={placeholder}
        />
        <button>Search</button>
      </div>
      <div className="dataResult">
        {data.map((value, key) => {
          return <div>{query&&value.includes(query)&&value}</div>;
        })}
      </div>
    </div>
  );
}

export default SearchBar;
