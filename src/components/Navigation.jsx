import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav style={{ padding: "10px", background: "#eee" }}>
      <h2>Inventory Management</h2>
      <div>
        <Link to="/">Home</Link>
        <br />
        <Link to="/form">Form</Link>
      </div>
    </nav>
  );
};

export default Navigation;
