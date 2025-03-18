import React from "react";
import "./../App.css"; // Import styles

const InventoryForm = () => {
  return (
    <div className="inventory-form">
      <h2>Add New Item</h2>
      <form>
        {/* TODO: Add input fields for name, quantity, and price */}
        <label htmlFor="name">Name : </label>
        <input type="text" name="name" id="" />

        <label htmlFor="quantity">Quantity</label>
        <input type="number" name="quantity" id="" />

        <label htmlFor="price">Price : </label>
        <input type="number" name="price" id="" />

        {/* TODO: Add a submit button */}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default InventoryForm;
