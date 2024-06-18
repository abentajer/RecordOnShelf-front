/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import "./Collection.css"; // Import CSS file for Collection

const Collection = ({ records }) => {
  return (
    <div className="collection">
      <Link to="/new-record" className="new-button-link">
        New
      </Link>
      <div className="card-list">
        {records.map((record, index) => (
          <Link
            key={index}
            to={`/record-detail/${record.id}`}
            className="card-link"
          >
            <div className="card">
              <div className="card-header">
                <h3>{`${record.artist} - ${record.album} (${record.releaseDate})`}</h3>
                <p>{`${record.label} - Released Date: ${record.releaseDate}`}</p>
              </div>
              <div className="card-body">
                <p>Record Number: {record.recordNumber}</p>
                <p>State of the Records: {record.recordState}</p>
                <p className="category">{record.category}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Collection;
