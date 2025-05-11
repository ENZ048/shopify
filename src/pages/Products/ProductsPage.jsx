import { React, useState, useEffect } from "react";
import "./ProductsPage.css";
import axios from "axios";
import { HashLoader } from "react-spinners";
import ProductCard from "../../components/ProductCard/ProductCard";
import ProductModal from "../../components/ProductModal/ProductModal";

export default function ProductsPage() {
  const categories = [
    { label: "Electronics", value: "electronics" },
    { label: "Jewellery", value: "jewelery" },
    { label: "Men's Fashion", value: "men's clothing" },
    { label: "Women's Fashion", value: "women's clothing" },
  ];

  const [selectedCategory, setSelectedCategory] = useState("electronics");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const fetchProducts = async (category) => {
    setLoading(true);

    try {
      const res = await axios.get(
        `https://fakestoreapi.com/products/category/${category}`
      );
      setProducts(res.data);
    } catch (err) {
      console.log("Error in fetching products", err);
      setProducts([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts(selectedCategory);
  }, [selectedCategory]);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
    console.log("Product clicked");
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
    setShowModal(false);
  };

  return (
    <div className="products-page">
      <aside className="categories">
        <h3>Categories</h3>
        <ul>
          {categories.map((category) => (
            <li
              key={category.value}
              className={selectedCategory === category.value ? "active" : ""}
              onClick={() => setSelectedCategory(category.value)}
            >
              {" "}
              {category.label}
            </li>
          ))}
        </ul>
      </aside>

      <div className="products-container">
        <h2>{selectedCategory.toUpperCase()}</h2>
        {loading ? (
          <div className="grid-placeholder">
            <HashLoader
              color={"#1e3c72"}
              loading={loading}
              size={50}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        ) : products.length ? (
          <div className="grid">
            {products.map((product) => (
              <div key={product.id} onClick={() => handleProductClick(product)}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid-placeholder">No products found.</div>
        )}

        {showModal && selectedProduct && (
          <ProductModal product={selectedProduct} onClose={handleCloseModal} />
        )}
      </div>
    </div>
  );
}
