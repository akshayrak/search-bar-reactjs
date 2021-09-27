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
      </div>
      <div className="dataResult">
        {data.map((value, key) => {
          let flag=query && value.includes(query)
          return (
            <>
            {flag&&<ul>
              <li>
              <a href="http://google.com">
                {flag && value}
              </a>
              </li>
            </ul>}
             
            </>
          );
        })}
      </div>
    </div>
  );
}

export default SearchBar;
