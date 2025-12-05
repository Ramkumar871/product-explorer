import React from "react";

function ProductCard({ product }) {
  return (
    <div style={{
      background: "#fff",
      padding: "15px",
      borderRadius: "10px",
      boxShadow: "0 0 10px rgba(0,0,0,0.1)"
    }}>
      <img 
        src={product.image} 
        alt={product.title} 
        style={{ width: "100px", height: "100px", objectFit: "contain" }}
      />
      <h3 style={{ fontSize: "16px" }}>{product.title.slice(0, 25)}...</h3>
      <p style={{ color: "green", fontWeight: "bold" }}>₹ {product.price}</p>
      <p style={{ fontSize: "12px" }}>{product.category}</p>
    </div>
  );
}

export default ProductCard;
