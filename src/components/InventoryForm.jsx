import React, { useState } from "react";
import "./../App.css"; // Import styles

const InventoryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    quantity: 0,
    price: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <div className="inventory-form">
      <h2>Add New Item</h2>
      <form>
        {/* TODO: Add input fields for name, quantity, and price */}
        <label htmlFor="name">Name : </label>
        <input
          type="text"
          name="name"
          id=""
          value={formData.name}
          onChange={handleChange}
        />

        <label htmlFor="quantity">Quantity</label>
        <input
          type="number"
          name="quantity"
          id=""
          value={formData.quantity}
          onChange={handleChange}
        />

        <label htmlFor="price">Price : </label>
        <input
          type="number"
          name="price"
          id=""
          value={formData.price}
          onChange={handleChange}
        />

        {/* TODO: Add a submit button */}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default InventoryForm;
