import React from "react";

const InventoryItem = ({ item }) => {
  // TODO: Display item details (name, quantity, price)
  const { name, quantity, price } = item;

  return (
    <li className="inventory-item">
      {/* TODO: Use item props to show product name, quantity, and price */}
      <ul>
        <li>Name : {name}</li>
        <li>Quantity : {quantity}</li>
        <li>Price : {price}</li>
      </ul>
    </li>
  );
};

export default InventoryItem;
