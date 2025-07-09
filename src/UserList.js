import React, { useEffect, useState } from 'react';
import axios from 'axios';

function UserList() {
  const [listOfUser, setListOfUser] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        setListOfUser(res.data);
      })
      .catch((err) => {
        console.error('Error fetching users:', err);
      });
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>User List</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {listOfUser.map((user) => (
          <li key={user.id} style={{ 
            background: '#f4f4f4', 
            margin: '10px 0', 
            padding: '10px', 
            borderRadius: '6px' 
          }}>
            <strong>{user.name}</strong><br />
            Email: {user.email}<br />
            Company: {user.company.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
