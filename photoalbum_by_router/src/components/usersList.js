import React from 'react';
import { Link } from 'react-router-dom';

const UserList = ({ users }) => {
  return (
    <div className="user-list">
      <h2>Список користувачів</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <Link to={`/albums/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;