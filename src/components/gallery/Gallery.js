import React from 'react';
import './Gallery.css';

const Gallery = () => {
  // Add your local image paths here
  const imagePaths = [
    'images/image2.png',
    'images/image3.png',
    'images/image4.png',
    'images/image5.png',
    'images/image6.png',
    'images/image7.png',
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
