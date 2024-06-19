import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Category.css"; // Import CSS file for Category

const Category = ({ records, setRecords }) => {
  const [selectedCategory, setSelectedCategory] = useState("Rock Progressive");
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle category options dropdown
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Function to filter records based on selected category
  const filterRecordsByCategory = (category) => {
    setSelectedCategory(category);
    setIsOpen(false); // Close dropdown after selecting category
  };

  // Function to render filtered cards based on selected category
  const renderFilteredCards = () => {
    let filteredRecords;
    if (selectedCategory === "All") {
      filteredRecords = records;
    } else {
      filteredRecords = records.filter(
        (record) => record.category === selectedCategory
      );
    }

    return filteredRecords.map((record, index) => (
      <div key={index} className="card">
        <Link to={`/record-detail/${index}`} className="card-link">
          <div className="card-header">
            <h3>{`${record.artist} - ${record.album} (${record.releaseDate})`}</h3>
            <p>{`${record.label} - Released Date: ${record.releaseDate}`}</p>
          </div>
          <div className="card-body">
            <p>Record Number: {record.recordNumber}</p>
            <p>State of the Records: {record.recordState}</p>
            <p className="category">{record.category}</p>
          </div>
        </Link>
      </div>
    ));
  };
  /******************** */
  //EDIT A RECORD
  const editRecord = id => {
    console.log('edit record clicked')
  }

  // Function to delete a record
  const deleteRecord = (id) => {
    // Implement record deletion
    const updatedRecords = records.filter((record) => record.id !== id);
    setRecords(updatedRecords);
  };
  /******************* */
  // Predefined categories for button options
  const categories = ["Rock Progressive", "AfroHouse", "Free Jazz", "HipHop"];

  return (
    <div className="category">
      <div className="button-container">
        <Link to="/new-record" className="new-button-link">
          New
        </Link>
        <div className="category-select">
          <button className="category-button" onClick={toggleDropdown}>
            Category
          </button>
          <div className={`category-options ${isOpen ? "open" : ""}`}>
            {categories.map((category, index) => (
              <button
                key={index}
                className="category-option"
                onClick={() => filterRecordsByCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="card-list">{renderFilteredCards()}</div>
    </div>
  );
};

export default Category;
