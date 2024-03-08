import React, { useState } from "react";
import { GalleryMedia } from "../../assets/GalleryImage/galleryMedia";
import StarCanvas from "../../screens/landingPage/StarbackGround";
import "./gallery.css";

const Gallery = () => {
  const [file, setFile] = useState(null);
  return (
    <div className="gallery-container">
      <StarCanvas />
      <h1>Gallery</h1>

      <div className="media-container">
        {GalleryMedia.map((file, index) => (
          <div className="media" key={index} onClick={() => setFile(file)}>
            <img src={file.url} alt="" />
          </div>
        ))}
      </div>

      <div className="media-container media-container-second">
        {GalleryMedia.map((file, index) => (
          <div className="media" key={index} onClick={() => setFile(file)}>
            <img src={file.url} alt="" />
          </div>
        ))}
      </div>

      <div className="popup-media" style={{ display: file ? "block" : "none" }}>
        <span onClick={() => setFile(null)}>&times;</span>
        <img src={file?.url} alt="" />
      </div>
    </div>
  );
};

export default Gallery;
