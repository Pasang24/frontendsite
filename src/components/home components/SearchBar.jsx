import React from "react";
import "./SearchBar.css";
import { Link } from "react-router-dom";

function SearchBar({ search_term, setSearchTerm }) {
  return (
    <div className="searchbar-wrapper">
      <div className="search-left-content">
        <h1 className="searchbar-title">
          Find A <span>Job</span> That <span>Matches</span> Your Passion
        </h1>
        <p>
          Hand-picked opportunities to work from home remotely, freelance,
          full-time, part-time, contract and internship
        </p>
        <form
          className="searchbar"
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <input
            type="text"
            placeholder="Search by job title..."
            value={search_term}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit">
            <Link to={`/search/${search_term}`} className="linker">Search</Link>
          </button>
        </form>
      </div>
    </div>
  );
}

export default SearchBar;
