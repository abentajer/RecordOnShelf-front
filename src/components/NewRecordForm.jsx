/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NewRecordForm.css"; // Import CSS file for NewRecordForm

// eslint-disable-next-line react/prop-types
const NewRecordForm = ({ records, setRecords }) => {
  const [form, setForm] = useState({
    artist: "",
    album: "",
    date: "",
    label: "",
    releaseDate: "",
    genre: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setRecords([...records, form]);
    navigate("/");
  };

  return (
    <div className="new-record-form">
      <h2>New Record Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="artist">Artist:</label>
        <input
          type="text"
          id="artist"
          name="artist"
          value={form.artist}
          onChange={handleChange}
        />

        <label htmlFor="album">Album:</label>
        <input
          type="text"
          id="album"
          name="album"
          value={form.album}
          onChange={handleChange}
        />

        <label htmlFor="date">Date:</label>
        <input
          type="text"
          id="date"
          name="date"
          value={form.date}
          onChange={handleChange}
        />

        <label htmlFor="label">Label:</label>
        <input
          type="text"
          id="label"
          name="label"
          value={form.label}
          onChange={handleChange}
        />

        <label htmlFor="releaseDate">Release Date:</label>
        <input
          type="text"
          id="releaseDate"
          name="releaseDate"
          value={form.releaseDate}
          onChange={handleChange}
        />

        <label htmlFor="genre">Genre:</label>
        <input
          type="text"
          id="genre"
          name="genre"
          value={form.genre}
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewRecordForm;
