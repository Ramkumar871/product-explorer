import React from "react";

function Navbar({ search, setSearch, category, setCategory, sort, setSort }) {
  return (
    <div style={{
      background: "#fff",
      padding: "15px",
      display: "flex",
      gap: "15px",
      justifyContent: "center",
      flexWrap: "wrap",
      boxShadow: "0 0 10px rgba(0,0,0,0.1)"
    }}>
      
      {/* Search */}
      <input 
        type="text" 
        placeholder="Search products..." 
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: "8px", width: "200px", borderRadius: "6px" }}
      />

      {/* Category Filter */}
      <select value={category} onChange={(e) => setCategory(e.target.value)} style={{ padding: "8px" }}>
        <option value="">All Categories</option>
        <option value="men's clothing">Men Clothing</option>
        <option value="women's clothing">Women Clothing</option>
        <option value="jewelery">Jewelery</option>
        <option value="electronics">Electronics</option>
      </select>

      {/* Sorting */}
      <select value={sort} onChange={(e) => setSort(e.target.value)} style={{ padding: "8px" }}>
        <option value="">Sort Price</option>
        <option value="low-high">Low to High</option>
        <option value="high-low">High to Low</option>
      </select>

    </div>
  );
}

export default Navbar;
