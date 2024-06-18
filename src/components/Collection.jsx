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
          <div key={index} className="card">
            <div className="card-header">
              <h3>{`${record.artist} - ${record.album} (${record.date})`}</h3>
              <p>{`${record.label} - ${record.releaseDate}`}</p>
            </div>
            <div className="card-body">
              <p>2, News</p>
              <p>{record.genre}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collection;
