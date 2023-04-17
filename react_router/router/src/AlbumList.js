import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const AlbumList = () => {
  const { userId } = useParams();
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
      .then(response => response.json())
      .then(data => setAlbums(data));
  }, [userId]);

  return (
    <div>
      <h1>Album List</h1>
      <ul>
        {albums.map(album => (
          <li key={album.id}>
            <Link to={`/photos/${album.id}`}>{album.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AlbumList;
