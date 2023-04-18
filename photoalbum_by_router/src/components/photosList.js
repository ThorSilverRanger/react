import React from 'react';

const PhotoList = ({ photos }) => {
  return (
    <div className="photo-list">
      <h2 className="photo-list-title">Фото</h2>
      <div className="photo-grid">
        {photos.map(photo => (
          <div key={photo.id} className="photo">
            <img src={photo.thumbnailUrl} alt={photo.title} className="photo-image" />
            <p className="photo-caption">{photo.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoList;


