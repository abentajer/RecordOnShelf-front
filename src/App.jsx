// App.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Collection from "./components/Collection";
import NewRecordForm from "./components/NewRecordForm";
import Category from "./components/Category";
import RecordDetail from "./components/RecordDetail"; // Import RecordDetail component
import "./App.css";

const Profile = () => <h1>Profile Page</h1>;

function App() {
  const [records, setRecords] = useState([]);

  const updateRecord = (updatedRecord) => {
    setRecords((prevRecords) =>
      prevRecords.map((record) =>
        record.id === updatedRecord.id ? updatedRecord : record
      )
    );
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/collections" element={<Collection records={records} />} />
        <Route
          path="/new-record"
          element={<NewRecordForm records={records} setRecords={setRecords} />}
        />
        <Route path="/categories" element={<Category records={records} />} />
        <Route path="/profile" element={<Profile />} />
        <Route
          path="/record-detail/:id"
          element={
            <RecordDetail records={records} updateRecord={updateRecord} />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
