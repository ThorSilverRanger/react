import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UserList from './UserList';
import AlbumList from './AlbumList';
import PhotoList from './PhotoList';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={UserList} />
        <Route exact path="/albums/:userId" component={AlbumList} />
        <Route exact path="/photos/:albumId" component={PhotoList} />
      </Switch>
    </Router>
  );
};

export default App;