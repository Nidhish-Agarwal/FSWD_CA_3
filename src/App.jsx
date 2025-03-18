import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation.jsx";
import InventoryList from "./components/InventoryList.jsx";
import "./App.css";
import InventoryForm from "./components/InventoryForm.jsx";

const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<InventoryList />} />
        <Route path="/form" element={<InventoryForm />} />
      </Routes>
    </Router>
  );
};

export default App;
