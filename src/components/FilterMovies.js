// src/components/FilterMovies.js

import { useState } from "react";

function FilterMovies({ filterMovielist }) {

  const [firstLetter, setFirstLetter] = useState("All");  

  function handleSelect(e) {
    setFirstLetter(e.target.value);

    console.log("selected", e.target.value);
    filterMovielist(firstLetter);
  };

  return (
    <div className="FilterMovies">
      <label>Show movies by first letter:</label>
      <select value={firstLetter} onChange={handleSelect}>
        <option value="All">All</option>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
        <option value="D">D</option>
      </select>
    </div>
  );
}

export default FilterMovies;
