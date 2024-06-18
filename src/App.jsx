/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Collection from "./components/Collection"; // Import Collection component
import NewRecordForm from "./components/NewRecordForm"; // Import NewRecordForm component

const Categories = () => <h1>Categories Page</h1>;
const Profile = () => <h1>Profile Page</h1>;

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Route for HomePage */}
        <Route path="/collections" element={<Collection />} />{" "}
        {/* Route for Collection */}
        <Route path="/new-record" element={<NewRecordForm />} />{" "}
        {/* Route for NewRecordForm */}
        <Route path="/categories" element={<Categories />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
