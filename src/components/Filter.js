import React, { useState } from "react";

function Filter({ onCategoryChange, onSearchChange }) {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="Filter">
      <input type="text" name="search" value={searchTerm} onChange={(e) => {setSearchTerm(e.target.value);  onSearchChange(e.target.value)}} placeholder="Search..." />
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
