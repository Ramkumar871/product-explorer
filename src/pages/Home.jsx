import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import Navbar from "../components/Navbar";

function Home() {

  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");

  // Fetch products from API
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setFiltered(data);
      });
  }, []);

  // Apply search + category filter + sorting
  useEffect(() => {
    let temp = [...products];

    // Search
    if (search) {
      temp = temp.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Category filter
    if (category) {
      temp = temp.filter((item) => item.category === category);
    }

    // Sorting
    if (sort === "low-high") {
      temp.sort((a, b) => a.price - b.price);
    } else if (sort === "high-low") {
      temp.sort((a, b) => b.price - a.price);
    }

    setFiltered(temp);
  }, [search, category, sort, products]);

  return (
    <div className="container">
      <Navbar 
        search={search} 
        setSearch={setSearch} 
        category={category} 
        setCategory={setCategory}
        sort={sort}
        setSort={setSort}
      />

      <div className="product-grid">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Home;
