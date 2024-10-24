import { Link } from 'react-router-dom';

function List() {
  const users = null as any;

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.firstname} {user.lastname} -{' '}
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
