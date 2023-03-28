// Gallery.js

import React from 'react';
import './Gallery.css';

const Gallery = () => {
  // Add your local image paths here
  const imagePaths = [
    'images/image1.jpg',
    'images/image2.jpg',
    'images/image3.jpg',
    'images/image4.jpg',
    'images/image5.jpg',
    'images/image6.jpg',
  ];

  const renderGalleryItem = (imagePath) => (
    <div className="gallery-item">
      <div
        className="image-placeholder"
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/${imagePath})` }}
      ></div>
      <button className="book-button" type="button">Book</button>
    </div>
  );

  return (
    <div className="gallery">
      <div className="gallery-grid">
        {imagePaths.map((imagePath, idx) => (
          <React.Fragment key={idx}>{renderGalleryItem(imagePath)}</React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
