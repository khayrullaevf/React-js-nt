import { useEffect } from "react";
import { useState } from "react";
import {Link} from 'react-router-dom'
const TeamPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const users = await response.json();
        setUsers(users)
      } catch (error) {
        console.log(error);
      }
    };
    getUsers()
  }, []);


  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <h3>{user.id} .{user.name}</h3>
          <p>Username: {user.username}</p>
          <p>Email : {user.email}</p>
          <Link to={`/team/${user.id}`}>See more</Link>
        </div>
      ))}
    </div>
  );
};

export default TeamPage;
