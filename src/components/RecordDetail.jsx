/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { useParams } from "react-router-dom";
import "./RecordDetail.css"; // Import CSS file for RecordDetail

const RecordDetail = ({ records }) => {
  const { id } = useParams();
  const record = records.find((record) => record.id === parseInt(id));

  if (!record) {
    return <p>Record not found</p>;
  }

  return (
    <div className="record-detail">
      <h2>Record Detail</h2>
      <form>
        <label htmlFor="artist">Artist:</label>
        <input
          type="text"
          id="artist"
          name="artist"
          value={record.artist}
          readOnly
        />

        <label htmlFor="album">Album:</label>
        <input
          type="text"
          id="album"
          name="album"
          value={record.album}
          readOnly
        />

        <label htmlFor="label">Label:</label>
        <input
          type="text"
          id="label"
          name="label"
          value={record.label}
          readOnly
        />

        <label htmlFor="releaseDate">Released Date:</label>
        <input
          type="text"
          id="releaseDate"
          name="releaseDate"
          value={record.releaseDate}
          readOnly
        />

        <label htmlFor="recordNumber">Record Number:</label>
        <input
          type="number"
          id="recordNumber"
          name="recordNumber"
          value={record.recordNumber}
          readOnly
        />

        <label htmlFor="recordState">State of the Records:</label>
        <input
          type="text"
          id="recordState"
          name="recordState"
          value={record.recordState}
          readOnly
        />

        <label htmlFor="category">Category:</label>
        <input
          type="text"
          id="category"
          name="category"
          value={record.category}
          readOnly
        />
      </form>
    </div>
  );
};

export default RecordDetail;
