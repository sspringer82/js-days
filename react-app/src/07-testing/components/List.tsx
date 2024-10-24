import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { User } from '../../types/User';

function List() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch('http://localhost:3001/users');
      const data: User[] = await response.json();
      setUsers(data);
    }

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <span>{`${user.firstname} ${user.lastname}`}</span> -
            <Link to={`/edit/${user.id}`}>Edit</Link>
          </li>
        ))}
      </ul>
      <div>
        <Link to="/create">Create new user</Link>
      </div>
    </div>
  );
}

export default List;
