import { useEffect, useState } from "react";
import ProductForm from "./ProductForm";
import ProductList from "./ProductList";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);

  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:5000/products");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleProductAdded = (product) => {
    setProducts((currentProducts) => [product, ...currentProducts]);
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/products/${id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete product");
      }

      setProducts((currentProducts) =>
        currentProducts.filter((product) => product._id !== id)
      );
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <h1>Inventory Management System</h1>

      <ProductForm
        onProductAdded={handleProductAdded}
        editingProduct={editingProduct}
        onProductUpdated={(updatedProduct) => {
          setProducts((currentProducts) =>
            currentProducts.map((product) =>
              product._id === updatedProduct._id
                ? updatedProduct
                : product
            )
          );

          setEditingProduct(null);
        }}
      />

      <ProductList
  products={products}
  onDelete={handleDelete}
  onEdit={(product) => setEditingProduct(product)}
/>
    </div>
  );
}

export default App;