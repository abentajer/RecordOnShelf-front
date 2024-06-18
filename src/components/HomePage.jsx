/* eslint-disable no-unused-vars */
import React from "react";
import "./HomePage.css";
import imageGif from "../assets/vinyl gif.gif";

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="section-1">
        <div className="content">
          <h1>Welcome to Record on Shelf !</h1>
          <p>
            Welcome! Here at Record on Shelf, you can create your own record
            categories and add them to your collection. Explore, organize, and
            enjoy a world of timeless music tailored to your unique taste. Let
            the needle drop and let the music play !
          </p>
        </div>
      </div>
      <div className="section-2">
        <div className="image-container">
          {/* Replace 'image-url.jpg' with your actual image URL */}
          <img src={imageGif} alt="Img-section2" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
