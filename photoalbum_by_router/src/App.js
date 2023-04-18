import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./components/usersList";
import AlbumList from "./components/albumsList";
import PhotoList from "./components/photosList";
import Logo from "./components/Logo";
import "./App.css";

const App = () => {
  const [users, setUsers] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((response) => response.json())
      .then((data) => setAlbums(data));
  }, []);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((data) => setPhotos(data));
  }, []);

  return (
    <Router>
      <div>
        <div className="header">
          <div>
          <Logo /> 
          </div>
          <h1>Фотоальбом</h1>
        </div>
        <div className="app">
          <div className="left-column">
            <UserList users={users} />
          </div>
          <div className="right-column">
            <Switch>
              <Route
                exact
                path="/albums/:userId"
                render={({ match }) => (
                  <AlbumList albums={albums} userId={match.params.userId} />
                )}
              />
              <Route
                exact
                path="/photos/:albumId"
                render={({ match }) => (
                  <PhotoList photos={photos} albumId={match.params.albumId} />
                )}
              />
              <Route
                exact
                path="/"
                render={() => <h2>Виберіть користувача</h2>}
              />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
