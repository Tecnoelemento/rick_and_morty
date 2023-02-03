import stySearchBar from "./SearchBar.module.css";
import React, { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [character, setCharacter] = useState("");

  const handleSearch = (evt) => {
    setCharacter(evt.target.value);
  };

  return (
    <div>
      <input
        onChange={handleSearch}
        className={stySearchBar.search}
        type="search"
        placeholder="Type the ID"
        value={character}
      />
      <button
        className={stySearchBar.btnsearch}
        onClick={() => onSearch(character)}
      >
        Search
      </button>
    </div>
  );
}
