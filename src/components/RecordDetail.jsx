/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./RecordDetail.css"; // Import CSS file for RecordDetail

const RecordDetail = ({ records, updateRecord, deleteRecord }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const record = records.find((record) => record.id === parseInt(id));

  // State to hold editable record fields
  const [editedRecord, setEditedRecord] = useState(record);
  if (!record) {
    return <p>Record not found</p>;
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedRecord({
      ...editedRecord,
      [name]: value
    });
  };


const handleSave = () => {
    updateRecord(editedRecord);
    navigate("/collections"); // Redirect to the collection page after saving
  };

  const handleDelete = () => {
    deleteRecord(record.id);
    navigate("/collections"); // Redirect to the collection page after deletion
  };

  return (
    <div className="record-detail">
      <h2>Record Detail</h2>
      <form>
        <label htmlFor="artist">Artist:</label>
        <input
          type="text"
          id="artist"
          name="artist"
          value={editedRecord.artist}
          onChange={handleInputChange}
        />

        <label htmlFor="album">Album:</label>
        <input
          type="text"
          id="album"
          name="album"
          value={editedRecord.album}
          onChange={handleInputChange}
        />

        <label htmlFor="label">Label:</label>
        <input
          type="text"
          id="label"
          name="label"
          value={editedRecord.label}
          onChange={handleInputChange}
        />

        <label htmlFor="releaseDate">Released Date:</label>
        <input
          type="text"
          id="releaseDate"
          name="releaseDate"
          value={editedRecord.releaseDate}
          onChange={handleInputChange}
        />

        <label htmlFor="recordNumber">Record Number:</label>
        <input
          type="number"
          id="recordNumber"
          name="recordNumber"
          value={editedRecord.recordNumber}
          onChange={handleInputChange}
        />

        <label htmlFor="recordState">State of the Records:</label>
        <input
          type="text"
          id="recordState"
          name="recordState"
          value={editedRecord.recordState}
          onChange={handleInputChange}
        />

        <label htmlFor="category">Category:</label>
        <input
          type="text"
          id="category"
          name="category"
          value={editedRecord.category}
          onChange={handleInputChange}
        />

        <div className="form-buttons">
          <button type="button" onClick={handleSave}>Save</button>
          <button type="button" onClick={handleDelete}>Delete</button>
        </div>
      </form>
    </div>
  );
};

export default RecordDetail;
