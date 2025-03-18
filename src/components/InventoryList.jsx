import React from "react";
import InventoryItem from "./InventoryItem.jsx";
import "./../App.css"; // Import styles

// an array of inventory items (id, name, quantity, price) is defined for you

const inventoryData = [
  { id: 1, name: "Laptop", quantity: 5, price: 1200 },
  { id: 2, name: "Keyboard", quantity: 10, price: 50 },
  { id: 3, name: "Mouse", quantity: 8, price: 25 },
];

const InventoryList = () => {
  return (
    <div className="inventory-list">
      <h2>Inventory List</h2>
      <ul>
        {/* TODO: Use map() to display inventory items using InventoryItem */}
        {inventoryData.map((data) => (
          <InventoryItem item={data} key={data.id} />
        ))}
      </ul>
    </div>
  );
};

export default InventoryList;
