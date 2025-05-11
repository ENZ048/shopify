import React from "react";
import "./ProductModal.css";

export default function ProductModal({ product, onClose }) {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="product-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>
        <div className="modal-content">
          <div className="image-section">
            <img src={product.image} alt={product.title} />
          </div>
          <div className="info-section">
            <h2>{product.title}</h2>
            <p className="price">Price: ${product.price}</p>
            <p className="description">{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
