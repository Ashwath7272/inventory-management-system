import { useEffect, useState } from "react";

function ProductForm({ onProductAdded, editingProduct, onProductUpdated }) {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    quantity: "",
    minStock: ""
  });

  useEffect(() => {
    if (editingProduct) {
      setFormData({
        name: editingProduct.name,
        category: editingProduct.category,
        price: editingProduct.price,
        quantity: editingProduct.quantity,
        minStock: editingProduct.minStock
      });
    }
  }, [editingProduct]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const url = editingProduct
        ? `http://localhost:5000/products/${editingProduct._id}`
        : "http://localhost:5000/products";

      const method = editingProduct ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ...formData,
          price: Number(formData.price),
          quantity: Number(formData.quantity),
          minStock: Number(formData.minStock)
        })
      });

      if (!response.ok) {
        throw new Error("Failed to save product");
      }

      const product = await response.json();

      if (editingProduct) {
        onProductUpdated(product);
      } else {
        onProductAdded(product);
      }

      setFormData({
        name: "",
        category: "",
        price: "",
        quantity: "",
        minStock: ""
      });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="form-container">
  <form onSubmit={handleSubmit}>
      <h2>{editingProduct ? "Edit Product" : "Add Product"}</h2>

      <input
        name="name"
        placeholder="Product Name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <input
        name="category"
        placeholder="Category"
        value={formData.category}
        onChange={handleChange}
        required
      />

      <input
        name="price"
        type="number"
        placeholder="Price"
        value={formData.price}
        onChange={handleChange}
        min="0"
        required
      />

      <input
        name="quantity"
        type="number"
        placeholder="Quantity"
        value={formData.quantity}
        onChange={handleChange}
        min="0"
        required
      />

      <input
        name="minStock"
        type="number"
        placeholder="Minimum Stock"
        value={formData.minStock}
        onChange={handleChange}
        min="0"
        required
      />

      <button type="submit">
        {editingProduct ? "Update Product" : "Add Product"}
      </button>
      </form>
</div>
  );
}

export default ProductForm;