import React from 'react';
import { Link } from 'react-router-dom';

const AlbumList = ({ albums }) => {
  return (
    <div className="album-list">
      <h2 className="album-list-title">Список альбомів</h2>
      <div className="album-list-scroll">
        <ul className="album-list-items">
          {albums.map(album => (
            <li key={album.id} className="album-list-item">
              <Link to={`/photos/${album.id}`} className="album-list-link">{album.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AlbumList;




