import React, { useState } from 'react';
import './SearchBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlassLocation } from '@fortawesome/free-solid-svg-icons';

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (city.trim()) onSearch(city);
    setCity('');
  };

  return (
    <form className="search-bar" onSubmit={handleSearch}>
      <input
        type="text"
        value={city}
        placeholder="Search for city..."
        onChange={(e) => setCity(e.target.value)}
      />
      <button type="submit">
        Search&nbsp;<FontAwesomeIcon icon={faMagnifyingGlassLocation} />
      </button>
    </form>
  );
};

export default SearchBar;
